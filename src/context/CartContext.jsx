import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserProductsContext } from "./ProductsContext/UserProductsContext";
import axios from "axios";
import { getApiUrl } from "../utils/getApiURL";
import { set } from "date-fns";

// TODO: NECESITO GUARDAR EN UNA VARIABLE EL shoppingCartId, para mandarlo en el clearCart, falta crear eso
// ARREGLO DEL CARRITO( SOLO ES REFERENCIA)
const defaultCart = [
    {
      productId: 1,
      img: "/public/images/banca/plin.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:2
    },
    {
      productId: 2,
      img: "./images/siliconas/Silicona Dowsil.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:8
    },
    {
      productId: 3,
      img: "./images/siliconas/Silicona Dowsil.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:5
    },
    {
      productId: 4,
      img: "./images/siliconas/Silicona Dowsil.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:7
    },
    {
      productId: 5,
      img: "./images/siliconas/Silicona Dowsil.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:4
    },
    {
      productId: 6,
      img: "./images/siliconas/Silicona Dowsil.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:7
    },
    {
      productId: 7,
      img: "./images/siliconas/Silicona Dowsil.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:7
    },
    {
      productId: 8,
      img: "./images/siliconas/Silicona Dowsil.png",
      titleName: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
      description:"Esta es una descripcion del producto",
      price: 13,
      idCategory:6,
      imgUrl:"htttps:shwjeuwtu.csgkg.com",
      stock:40,
      quantity: 1,
      valorization:3
    }
  ]

// const defaultCart = []


const CartContext = createContext()


const CartContextProvider = ({children}) =>{
    const apiUrl = getApiUrl();

     // USEROUTER
    const navigate = useNavigate()

    const { getProductDetails } = useUserProductsContext()

    const [cart, setCart] = useState( [] )

    const [isCartModal , setIsCartModal] = useState(false)

    const [total, setTotal] = useState(0)

    const totalItemsCart = cart.length

    const saveCartToLocalStorage = (cart) => {
      localStorage.setItem("previewCart", JSON.stringify(cart));
    };  

    const continuePurchase = () => {
        navigate("/cart/continue");
    }

    // Función para incrementar la cantidad de un producto
    const increaseProductCount = (id) => {
        setCart(prevCart => {
          const updatedCart = prevCart.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity + 1
              };
            }
            return item;
          });

          saveCartToLocalStorage(updatedCart);

          return updatedCart;
        });
    };


    // Función para disminuir la cantidad de un producto
    const decreaseProductCount = (id) => {
        setCart(prevCart => {
        const updatedCart = prevCart.map(item => {
            if (item.id === id && item.quantity > 1) {
            return {
                ...item,
                quantity: item.quantity - 1
            };
            }
            return item;
        });

        saveCartToLocalStorage(updatedCart);

        return updatedCart;
        });
    };


    //Funcion para Eliminar un producto del Preview Carrito
    const deleteProduct = (id) => setCart( prevCart => {               
        const updatedCart = prevCart.filter( item => item.id !== id)

        saveCartToLocalStorage(updatedCart);

        return updatedCart
    })

    // Funcion para agregar un producto al Preview Carrito
    const addProductToCart = ( id, quantity ) => {
      setCart( prevCart => {

        const existingProduct = prevCart.find( item => item.id === id )
        
        let updatedCart

        if( existingProduct ){
          updatedCart = prevCart.map( item => 
            item.id === id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
          


        } else {
          updatedCart = [ ...prevCart, { id, quantity: 1 } ]

        }
        saveCartToLocalStorage(updatedCart);

        return updatedCart
  
      })
      openCart()
    }

    // Calcular el total del carrito
    const calculateTotal = async () => {
      try {
        const productDetails = await Promise.all(
          cart.map(item => getProductDetails(item.id, true))
        );

        const total = productDetails.reduce((acc, product, index) => {
          const quantity = cart[index].quantity;
          return acc + (product?.price * quantity);
        }, 0);

        setTotal(total); // Actualiza el estado con el total calculado
      } catch (error) {
        console.error("Error al calcular el total del carrito:", error);
        setTotal(0); // Manejo de errores: establece el total en 0 si algo falla
      }
    };

    const saveCartToDatabase = async () => {
      const apiUrl = getApiUrl();
      const token = localStorage.getItem("authToken");

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        
        const shoppingCartItems = cart.map(item => ({
          productId: item.id, 
          quantity: item.quantity
        }));

        const body = { shoppingCartItems: shoppingCartItems };
        console.log("Saving cart to database:", body);
        const response = await axios.put(`${apiUrl}/shoppingCart`, { body }, config);

        if (response.status === 200) {
          console.log("Carrito guardado exitosamente en la base de datos.");
        }
      } catch (error) {
        console.error("Error al guardar el carrito en la base de datos:", error);
      } finally {
        localStorage.removeItem("previewCart");
        setCart([]);
      }
    };




    // Funcions Cart modal
    const openCart = () => {
      setIsCartModal( true )
    }

    const closeCart = () => {
      setIsCartModal( false )
    }

    const toggleCart = () => {
      setIsCartModal( prev => !prev )
    }



    useEffect(() => {

      const fetchCartFromDatabase = async () => {
      const apiUrl = getApiUrl();
      
      try {
          const token = localStorage.getItem("authToken");
          if (!token) {
            return [];
          }

          const config = {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          };

          const response = await axios.get(`${apiUrl}/shoppingCart`, config); 

          const data = response.data.shoppingCartItems
          const cartId = response.data.shoppingCartId

          if (data.ok && data.length > 0) {

            localStorage.setItem("previewCart", JSON.stringify(data));
            console.log("Cart fetched from DB:", data);
            setCart(response.data);  

            await axios.delete(`${apiUrl}/api/v1/shoppingCart/${cartId}`);
          } else{
            console.log("Cart is empty or not found in DB");            
            setCart([])
          }
        } catch (err) {
          console.error("Error fetching cart from DB", err);
          setCart([])
        } 
      };

      fetchCartFromDatabase();

    }, [ setCart ]);


      useEffect(() => {
        calculateTotal(); 
      }, [cart])

      useEffect(() => {
        const handleBeforeUnload = async (event) => {

          await saveCartToDatabase();

          localStorage.removeItem("previewCart");
        };
    
        window.addEventListener("beforeunload", handleBeforeUnload);
    
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, [cart]);


    return (

        <CartContext.Provider value={{ cart , setCart , continuePurchase,increaseProductCount , decreaseProductCount,deleteProduct,addProductToCart, isCartModal, toggleCart, openCart, closeCart, total, totalItemsCart, saveCartToDatabase }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


export const useCartContext = () => useContext(CartContext)