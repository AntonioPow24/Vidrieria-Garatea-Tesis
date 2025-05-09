import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserContext";


const useUpdateUser = () => {
  const { user, setUser } = useAuth(); // Obtener el usuario actual y la función para actualizarlo
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState( false )

    const hasEmptyFields = ( updateUserState ) => Object.entries(updateUserState).some(
    ([key, value]) =>
      value === "" && ["userName", "lastName", "email"].includes(key)
    )
  
  const updateUser = async (updatedFields) => {
    setLoading(true);
    setError(null);
    setSuccess( false )

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        `http://apiorders.somee.com/api/v1/user/update`,
        updatedFields,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          validateStatus: (status) => status >= 200 && status < 300,
        },
      );
      console.log(response);
      
      if (response.status === 200) {
        const updatedUser = response.data;
        console.log("Usuario actualizado:", updatedUser);
  
        setUser(updatedUser);
        setSuccess(true);
        setError(null);
      }
    } catch (err) {
      console.log("Error completo:", err); // Log completo del error
      console.log("Error response:", err.response); // Log de la respuesta del servidor
    
      const backendError =
        err.response?.data?.message || "Error al actualizar los datos.";
      console.log("Mensaje de error procesado:", backendError);
    
      setError(backendError);
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, hasEmptyFields, loading, error, success };
};

export default useUpdateUser;