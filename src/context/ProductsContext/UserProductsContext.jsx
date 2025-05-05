import { createContext, useContext, useEffect, useState } from "react";
import { dataProducts } from "../../data/dataProducts";
import { categoryProducts } from "../../data/categoryProducts";

export const UserProductsContext = createContext();

const UserProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const [allCategories, setAllCategories] = useState([]);

    const [currentCategory, setCurrentCategory] = useState(null); // La categoría que el usuario está viendo

    const [ searchQuery, setSearchQuery ] = useState('')

    const [isLoading, setIsLoading] = useState(false);

    // Traerme todos los productos de una categoria
    //TODO Descomentar el codigo del fetching, borrar la simulacion
    const fetchProducts = async (categoryId) => {

        // setIsLoading(true);
        // try {

        //     const response = await fetch(`/api/user/product?category=${categoryId}&isAvailable=true`);
        //     const data = await response.json();
                // data=[ ... ]
        //     setProducts(data); // Setear productos de esa categoría
        // } catch (err) {
        //     console.error("Error fetching products by category:", err);
        // } finally {
        //     setIsLoading(false);
        // }

        console.log(currentCategory);
        
        setProducts([]);  // O mostrar un mensaje de carga si prefieres

        try {
            const filteredProducts = dataProducts.filter(product => product.categoryId === categoryId);
    
            if (filteredProducts.length > 0) {
                setProducts(filteredProducts);  // Setear los productos de la categoría
            } else {
                setProducts([]);  // O podrías manejar el caso de "sin productos" de otra manera
            }
        } catch (err) {
            console.error("Error fetching products by category:", err);
        }

        
    };

    // Función para obtener los detalles de un producto por su ID
    // todo Colocar el async y descomentar el codigo real
    const getProductDetails =  (productId,isCartItem=false) => {
        // try {
        //     const response = await fetch(`/api/user/product/${productId}`);
        //     const data = await response.json();

        //     if (isCartItem) {
        //         return {
        //             titleName: data.titleName,
        //             imageUrl: data.imageUrl,
        //             price: data.price,
        //             stock:data.stock
        //         };
        //     }
    
        //     // Si es un detalle completo del producto, devuelve todos los datos
        //     return data;

        // } catch (err) {
        //     console.error("Error fetching product details:", err);
        // }
        
        return dataProducts.find( product => product.productId === productId )
    };

    // Función para obtener las categorías
    // todo descomentar el fetch correspondiente
    const fetchCategories = async () => {
        // try {
        //     const response = await fetch("/api/user/categories");
        //     const data = await response.json();
        //     setAllCategories(data); // Setear todas las categorías disponibles
        // } catch (err) {
        //     console.error("Error fetching categories:", err);
        // }

        setAllCategories( categoryProducts )
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


    // Filtrar productos basados en searchQuery
    const filteredProducts = products.filter(product => 
        product.titleName.toLowerCase().includes(searchQuery.toLowerCase()) // Filtra por el nombre del producto
    );

    useEffect(() => {
        fetchCategories();
    }, []);

    // useEffect para cargar los productos de la categoría seleccionada
    useEffect(() => {
        if (currentCategory) {
            fetchProducts(currentCategory); // Cargar productos categoría actual

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