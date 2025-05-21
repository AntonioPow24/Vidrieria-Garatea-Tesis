import { createContext, useContext, useEffect, useRef, useState } from "react";
import { dataProducts } from "../../data/dataProducts";
import { categoryProducts } from "../../data/categoryProducts";
import axios from "axios";
import { use } from "react";
import { getApiUrl } from "../../utils/getApiURL";


export const UserProductsContext = createContext();

const UserProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const [allCategories, setAllCategories] = useState([]);

    const [currentCategory, setCurrentCategory] = useState(null);

    const [ searchQuery, setSearchQuery ] = useState('')

    const [isLoadingProducts, setIsLoadingProducts] = useState(false);
    const [isLoadingDetails, setIsLoadingDetails] = useState(false);


    const fetchProducts = async (categoryId) => {
        const apiUrl = getApiUrl();
        const timer = new Promise((resolve) => setTimeout(resolve, 800));

        setIsLoadingProducts(true); 
        try {
            const response = await axios.get(`${apiUrl}/product/list`, {
                params: { categoryId },
            });
            const data = response.data;
            await timer;
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
            setIsLoadingProducts(false);
        }
        
    };

    const productCache = useRef({}); 

    const getProductDetails = async (id,isCartItem=false) => {
        const apiUrl = getApiUrl();
        if (!id) {
            console.error("El ID del producto es inválido:", id);
            throw new Error("El ID del producto es inválido.");
        }

        if (productCache.current[id]) {
            return productCache.current[id];
        }
        
        try {
            setIsLoadingDetails(true);

            const timer = new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await axios.get(`${apiUrl}/product/${id}`);
            const data = response.data;

            productCache.current[id] = data; 
            
            await timer;

            if (isCartItem) {
                return {
                    titleName: data.titleName,
                    images: data.images,
                    price: data.price,
                    stock: data.stock,
                };
            }
            return data;

        } catch (err) {
            console.error("Error fetching product details:", err);
            throw new Error("No se pudo obtener los detalles del producto.");
        } finally {
            setIsLoadingDetails(false);
        }
        
        
    };

    const fetchCategories = async () => {
        const apiUrl = getApiUrl();
        try{
            const response = await axios.get(`${apiUrl}/category/list`);
            const data = await response.data;
            setAllCategories(data);
        } catch(err){
            console.error('Error fetching categories:', err);
        }
    };


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
        return product.titleName.toLowerCase().includes(searchQuery.toLowerCase())
    }
    );

    useEffect(() => {
        fetchCategories();
    }, []);


    useEffect(() => {
        if (currentCategory) {
            fetchProducts(currentCategory);
        }
    }, [currentCategory]);

    return (
        <UserProductsContext.Provider
            value={{
                products: filteredProducts,
                allCategories,
                isLoadingProducts,
                isLoadingDetails,
                currentCategory,
                searchQuery,
                setSearchQuery,
                setCurrentCategory,
                getProductDetails,
                twoTopProducts
            }}
        >
            {children}
        </UserProductsContext.Provider>
    );
};

export default UserProductsContextProvider;

export const useUserProductsContext = () => useContext(UserProductsContext);