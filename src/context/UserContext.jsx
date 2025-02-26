import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

// Usuario de prueba
const userTest = {
  idUser: "1",
  password: "Antonio2401",
  email:"user@gmail.com",
  address: "",
  phoneNumber: undefined,
  email: "garciaromeroantonio@gmail.com",
  userRole: "user",
  requestList: [],
  userName: "Antonio",
  lastName: "Garcia Romero",
};

// Usuario admin de prueba
const userAdmi = {
  idUser: "2",
  email:"admin@gmail.com",
  password: "admin2401",
  address: "",
  phoneNumber: undefined,
  email: "admin@empresa.com",
  userRole: "admin",
  requestList: [],
  userName: "admin",
  lastName: "Garcia Romero",
};

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userTest); // Estado del usuario autenticado
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  // Función para inicializar el usuario al cargar la aplicación
  const initializeUser = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        setLoading(true);
        const response = await axios.get("/api/auth/user", {
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



    // Función para hacer login
    const login = async (email, password) => {
        setLoading(true);
        try {
        const response = await axios.post("/api/auth/login", { email, password });
        const { token } = response.data;
        localStorage.setItem("authToken", token); // Guarda el token en Local Storage

        // Llama a la API para obtener la información del usuario
        await initializeUser();
        } catch (err) {
        setError("Usuario o contraseña incorrectos.");
        } finally {
        setLoading(false);
        }
    };

    // Función para registrar un usuario
    const register = async (userData) => {
        setLoading(true);
        try {
        const response = await axios.post("/api/auth/register", userData);
        const { token } = response.data;
        localStorage.setItem("authToken", token); // Guarda el token en Local Storage

        // Iniciar sesión automáticamente tras registrarse
        await login(userData.email, userData.password);

        setError(null);
        } catch (err) {
        setError("Hubo un problema al registrar el usuario.");
        console.error(err);
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
      <UserContext.Provider value={{ user, login, register, logout, loading, error }}>
          {children}
      </UserContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useAuth = () => useContext(UserContext);