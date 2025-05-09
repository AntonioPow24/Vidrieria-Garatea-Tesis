import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

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



  // Función para inicializar el usuario al cargar la aplicación
  const initializeUser = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        setLoading(true);
        const response = await axios.get("http://apiorders.somee.com/api/v1/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Respuesta del initialize:", response.data);
        
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



    // Función para hacer login
    const login = async (email, password, closeAuth) => {
        setLoading(true);
        try {
        const response = await axios.post("http://apiorders.somee.com/api/v1/user/login", { email, password });

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

    // Función para registrar un usuario
    const register = async (formData, closeAuth) => {
      setLoading(true);
      try {
          console.log("Datos enviados al servidor:", formData);
  
          await axios.post(
              "http://apiorders.somee.com/api/v1/user/register",
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

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem("authToken"); // Elimina el token
        setUser(null); // Limpia el estado del usuario
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