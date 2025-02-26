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
      // Realiza la solicitud al backend
      const response = await axios.put(`/api/user/${user.idUser}`, updatedFields, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Enviar el token si es necesario
        },
      });

        // Usar la respuesta para actualizar el usuario local
        const updatedUser = response.data; // El backend debería devolver el usuario actualizado
        setUser(updatedUser);
        setSuccess( true )

      // Retorna el usuario actualizado para el componente
      return updatedUser;
    } catch (err) {
        const backendError = err.response?.data?.message || "Error al actualizar los datos.";
        setError(backendError);
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, hasEmptyFields, loading, error, success };
};

export default useUpdateUser;