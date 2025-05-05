import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserProductsContext } from "./ProductsContext/UserProductsContext";
import axios from "axios";

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


     // USEROUTER
    const navigate = useNavigate()

    const { getProductDetails } = useUserProductsContext()

    //Estado para manejar la cantidad de Productos en el Preview Carrito
    const [cart, setCart] = useState( [] )

    // Estado para el Modal del cart
    const [isCartModal , setIsCartModal] = useState(false)

    // Total precio de los items
    const [total, setTotal] = useState(0)

    // Total de items dentro del carrito
    const totalItemsCart = cart.length





    // Funcion Guardar en Local Storage
    const saveCartToLocalStorage = (cart) => {
      localStorage.setItem("previewCart", JSON.stringify(cart));
    };  


    // Funcion Continuar Compra
    const continuePurchase = () => {
        navigate("/cart/continue");
    }

    // Función para incrementar la cantidad de un producto
    const increaseProductCount = (productId) => {
        setCart(prevCart => {
          const updatedCart = prevCart.map(item => {
            if (item.productId === productId) {
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
    const decreaseProductCount = (productId) => {
        setCart(prevCart => {
        const updatedCart = prevCart.map(item => {
            if (item.productId === productId && item.quantity > 1) {
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
    const deleteProduct = (productId) => setCart( prevCart => {               
        const updatedCart = prevCart.filter( item => item.productId !== productId)

        saveCartToLocalStorage(updatedCart);

        return updatedCart
    })

    // Funcion para agregar un producto al Preview Carrito
    const addProductToCart = ( productId, quantity ) => {
      setCart( prevCart => {

        const existingProduct = prevCart.find( item => item.productId === productId )
        
        let updatedCart

        if( existingProduct ){
          updatedCart = prevCart.map( item => 
            item.productId === productId 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
          


        } else {
          updatedCart = [ ...prevCart, { productId, quantity: 1 } ]

        }
        saveCartToLocalStorage(updatedCart);

        return updatedCart
  
      })
      openCart()
    }

    // Calcular el total del carrito
    const calculateTotal = () => {

      // if (!Array.isArray(cart)) {
      //   console.error('El carrito no es un arreglo válido.');
      //   setTotal(0); // O alguna otra lógica adecuada para el caso
      //   return;
      // }
    
      const total = cart.reduce((acc, item) => {
        const product = getProductDetails(item.productId, true); // Obtenemos los detalles del producto desde ProductsContext
        return acc + (product?.price * item.quantity); // Calculamos el total con el precio y la cantidad
      }, 0);
    
      setTotal(total);
      
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

      console.log('se verifico bd');
      
      // TODO: CODIGO DE PRUEBA, ELIMINAR DESPUES

    // Verificar si hay carrito en la BD
    const fetchCartFromDatabase = async () => {
      
      
      try {
          const response = await axios.get("/api/cartsd"); 
          const data = response.data.shoppingCartItems
          if (data.ok && data.length > 0) {

            console.log('Si hay carrito en BD Y esta lleno');
            

            // Si hay carrito en BD, guardamos en localStorage
            localStorage.setItem("previewCart", JSON.stringify(data));
            setCart(response.data);  

            await axios.delete("/api/cart");  // Vaciar carrito en BD
          } else{
            console.log('no hay carrit oen BD o esta vacio');
            
            setCart([])
          }
        } catch (err) {
          console.error("Error fetching cart from DB", err);
          setCart([])
        } 
      };


        // Si no hay data en localStorage, intentamos traerla de la BD
        fetchCartFromDatabase();



      }, [ setCart ]);


      useEffect(() => {
        calculateTotal(); 
      }, [cart])

      useEffect(() => {
        const handleBeforeUnload = async (event) => {
          // Guardar el carrito en la base de datos antes de que el usuario cierre la página
          await saveCartToDatabase();
          
          // Limpiar el carrito en LocalStorage
          localStorage.removeItem("previewCart");
        };
    
        // Agregar el evento antes de que se cierre o recargue la página
        window.addEventListener("beforeunload", handleBeforeUnload);
    
        // Limpiar el evento cuando el componente se desmonte
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, [cart]);


    return (

        <CartContext.Provider value={{ cart , setCart , continuePurchase,increaseProductCount , decreaseProductCount,deleteProduct,addProductToCart, isCartModal, toggleCart, openCart, closeCart, total, totalItemsCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


export const useCartContext = () => useContext(CartContext)