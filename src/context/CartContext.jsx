import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserProductsContext } from "./ProductsContext/UserProductsContext";
import axios from "axios";
import { getApiUrl } from "../utils/getApiURL";
import { set } from "date-fns";
import { useAuth } from "./UserContext";

// const defaultCart = []


const CartContext = createContext()


const CartContextProvider = ({children}) =>{
    const apiUrl = getApiUrl();

     // USEROUTER
    const navigate = useNavigate()

    const { getProductDetails } = useUserProductsContext()
    const { user } = useAuth()

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
          },
        };
        
      const payload = {
        ShoppingCartItems: cart.map(i => ({
          productId: i.id,
          quantity: i.quantity
        }))
      };

      await axios.put(`${apiUrl}/shoppingCart`, payload, config);

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
      const preview = localStorage.getItem("previewCart");
      if (preview) {
        setCart(JSON.parse(preview));
        return;
      }

      const fetchCartFromDatabase = async () => {
        const apiUrl = getApiUrl();
        
        try {
            const token = localStorage.getItem("authToken");
            if (!token) return

            const { data } = await axios.get(`${apiUrl}/shoppingCart`, {
              headers: { Authorization: `Bearer ${token}` }
            })

            const previewItems = data.shoppingCartItems.map(item => ({
              id: item.productId,
              quantity: item.quantity
            }));

            setCart(previewItems);
            localStorage.setItem("previewCart", JSON.stringify(previewItems))

          } catch (err) {
            console.error("Error fetching cart from DB", err);
            setCart([])
          } 
      };

      fetchCartFromDatabase();

    }, [ user ]);


    useEffect(() => {
      calculateTotal(); 
    }, [cart])

    return (

        <CartContext.Provider value={{ cart , setCart , continuePurchase,increaseProductCount , decreaseProductCount,deleteProduct,addProductToCart, isCartModal, toggleCart, openCart, closeCart, total, totalItemsCart, saveCartToDatabase }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


export const useCartContext = () => useContext(CartContext)