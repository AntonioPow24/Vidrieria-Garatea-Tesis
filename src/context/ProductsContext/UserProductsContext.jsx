import { createContext, useContext, useEffect, useRef, useState } from "react";
import { dataProducts } from "../../data/dataProducts";
import { categoryProducts } from "../../data/categoryProducts";
import axios from "axios";
import { use } from "react";


export const UserProductsContext = createContext();

const UserProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const [allCategories, setAllCategories] = useState([]);

    const [currentCategory, setCurrentCategory] = useState(null); // La categoría que el usuario está viendo

    const [ searchQuery, setSearchQuery ] = useState('')

    const [isLoading, setIsLoading] = useState(false);


    const fetchProducts = async (categoryId) => {

        setIsLoading(true); 
        try {
            const response = await axios.get(`http://apiorders.somee.com/api/v1/product/list`, {
                params: { categoryId },
            });
            const data = response.data;
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
            setIsLoading(false);
        }
        
    };

    const productCache = useRef({}); 

    const getProductDetails = async (productId,isCartItem=false) => {

        if (productCache.current[productId]) {
            return productCache.current[productId];
        }

        try {
            setIsLoading(true);

            const timer = new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await axios.get(`http://apiorders.somee.com/api/v1/product/${productId}`);
            const data = response.data;

            productCache.current[productId] = data; 
            
            await timer;

            if (isCartItem) {
                return {
                    titleName: data.titleName,
                    imageUrl: data.images[0].url,
                    price: data.price,
                    stock: data.stock,
                };
            }
            // Si es un detalle completo del producto, devuelve todos los datos
            return data;

        } catch (err) {
            console.error("Error fetching product details:", err);
            throw new Error("No se pudo obtener los detalles del producto.");
        } finally {
            setIsLoading(false);
        }
        
        
    };

    const fetchCategories = async () => {

        try{
            const response = await axios.get('http://apiorders.somee.com/api/v1/category/list');
            const data = await response.data;
            setAllCategories(data);
        } catch(err){
            console.log('Error fetching categories:', err);
        }
    };


    // Funcion top 2 Productos con mas valorización
    // todo FETCH al backend PARA TRAERME LOS MEJORES 2 PRODUCTOS
    const twoTopProducts = () => {

        if(dataProducts.length <= 2) return dataProducts

        // Ordenar el array por valorization, en caso de empate, por precio
        dataProducts.sort((a,b) => {
            if(a.valorization === b.valorization){
                return b.price - a.price
            }
    
            return b.valorization - a.valorization
        })
    
        return dataProducts.slice(0,2)
    }


    const filteredProducts = products.filter(product => {
        console.log(product);
        
        return product.titleName.toLowerCase().includes(searchQuery.toLowerCase())
    }
    );

    useEffect(() => {
        fetchCategories();
    }, []);


    useEffect(() => {
        if (currentCategory) {
            fetchProducts(currentCategory);

            console.log('se Hizo Fetch a los products');

        }
    }, [currentCategory]);

    return (
        <UserProductsContext.Provider
            value={{
                products: filteredProducts,
                allCategories,
                isLoading,
                currentCategory,
                searchQuery,
                setSearchQuery,
                setCurrentCategory, // cambiar la categoría actual
                getProductDetails,
                twoTopProducts // obtener los detalles del producto
            }}
        >
            {children}
        </UserProductsContext.Provider>
    );
};

export default UserProductsContextProvider;

export const useUserProductsContext = () => useContext(UserProductsContext);