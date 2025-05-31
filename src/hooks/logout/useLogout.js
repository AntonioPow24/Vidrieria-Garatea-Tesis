import { useCartContext } from "../../context/CartContext";
import { useAuth } from "../../context/UserContext";


export const useLogout = () => {
  const { setUser } = useAuth();
  const cartContext = useCartContext();
  const cart = cartContext?.cart || [];
  const saveCartToDatabase = cartContext?.saveCartToDatabase;

  const logout = async () => {
    try {
      if (cart.length > 0 && typeof saveCartToDatabase === "function") {
        await saveCartToDatabase();
      }
    } catch (error) {
      console.error("Error al guardar el carrito en la base de datos durante el logout:", error);
    } finally {
      localStorage.removeItem("authToken");
      setUser(null);
    }
  };

  return {logout};
};