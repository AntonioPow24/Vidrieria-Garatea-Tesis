import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { getApiUrl } from "../utils/getApiURL";

const UserContext = createContext();
// Usuario de prueba
const userTest = {
  id: "1",
  password: "Antonio2401",
  email:"user@gmail.com",
  email: "garciaromeroantonio@gmail.com",
  roles:["user"],
  // requestList: [],
  userName: "Antonio",
  lastName: "Garcia Romero",
};

// Usuario admin de prueba
const userAdmi = {
  id: "2",
  email:"admin@gmail.com",
  password: "admin2401",
  // phoneNumber: undefined,
  email: "admin@empresa.com",
  roles:["admin"],
  requestList: [],
  userName: "admin",
  lastName: "Garcia Romero",
};

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState( null ); // Estado del usuario autenticado
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



    const initializeUser = async () => {
      const apiUrl = getApiUrl();
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          setLoading(true);
          const response = await axios.get(`${apiUrl}/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          
          const user = response.data;

          setUser(user);


          
        } catch (err) {
          setError(err);
          localStorage.removeItem("authToken");
        } finally {
          setLoading(false);
        }
      }
    };

    const login = async (email, password, closeAuth) => {
        const apiUrl = getApiUrl();
        setLoading(true);
        try {
        const response = await axios.post(`${apiUrl}/user/login`, { email, password });

        const { token } = response.data;
        localStorage.setItem("authToken", token);

        await initializeUser();

        setError(null);
        closeAuth();
        } catch (err) {
        console.error("Error en el registro:", err.response?.data || err.message);
        setError("Usuario o contraseña incorrectos.");
        } finally {
        setLoading(false);
        }
    };

    const register = async (formData, closeAuth) => {
      const apiUrl = getApiUrl();
      setLoading(true);
      try {
          await axios.post(
              `${apiUrl}/user/register`,
              formData
          );

          await login(formData.email, formData.password, closeAuth);
  
          setError(null);
      } catch (err) {
          console.error("Error en el registro:", err.response?.data || err.message);
          setError(err.response?.data?.message || "Hubo un problema al registrar el usuario.");
      } finally {
          setLoading(false);
      }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setUser(null);
    };

    useEffect(() => {
        initializeUser()
    },[])


  return (
      <UserContext.Provider value={{ user, login, register, logout, loading, error, setUser }}>
          {children}
      </UserContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useAuth = () => useContext(UserContext);