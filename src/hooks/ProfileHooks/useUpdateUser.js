import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserContext";
import { getApiUrl } from "../../utils/getApiURL";


const useUpdateUser = () => {
  const { user, setUser } = useAuth(); // Obtener el usuario actual y la función para actualizarlo
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState( false )

  const apiUrl = getApiUrl();

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
        `${apiUrl}/user/update`,
        updatedFields,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          validateStatus: (status) => status >= 200 && status < 300,
        },
      );
      
      if (response.status === 200) {
        const updatedUser = response.data;
        setUser(updatedUser);
        setSuccess(true);
        setError(null);
      }
    } catch (err) {
      const backendError =
        err.response?.data?.message || "Error al actualizar los datos.";
      console.error("Mensaje de error procesado:", backendError);
    
      setError(backendError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 3000);
    
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return { updateUser, hasEmptyFields, loading, error, success };
};

export default useUpdateUser;