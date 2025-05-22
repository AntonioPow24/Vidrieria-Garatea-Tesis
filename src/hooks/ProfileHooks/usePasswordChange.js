import { useState } from "react"
import { usePasswordValidation } from "./usePasswordValidation";
import axios from "axios";
import { getApiUrl } from "../../utils/getApiURL";


export const usePasswordChange = () => {

    
    const { conditions, validatePassword, setConditions } = usePasswordValidation();

    const [enteredCurrentPassword, setEnteredCurrentPassword] = useState( '' )
    const [newPassword, setNewPassword] = useState( '' )
  
    const [loading, setLoading] = useState( false )
    const [error, setError] = useState( '' )
    const [successChange, setSuccessChange] = useState(false)


    // Manejo de inputs
    const handleCurrentPasswordChange = (e) => setEnteredCurrentPassword(e.target.value);
    const handleNewPasswordChange = (e) => {
        const password = e.target.value;
        setNewPassword(password);
        validatePassword(password);
    };

    // Validar formulario
    const isFormValid =
        enteredCurrentPassword.length > 0 &&
        Object.values(conditions).every((condition) => condition);



    const changePassword = async () => {

        const apiUrl = getApiUrl();

        if (!isFormValid) {
        setError("Por favor, complete los campos correctamente.");
        setTimeout(() => setError(""), 3000);
        return;
        }

        setLoading(true);
        setError("");

        try {
        const token = localStorage.getItem("authToken");
        if (!token) {
            throw new Error("No se encontró el token de autenticación.");
        }

        const response = await axios.post(
            `${apiUrl}/user/resetPassword`, 
            {
                currentPassword: enteredCurrentPassword,
                newPassword: newPassword,
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        if (response.status === 200) {
            setSuccessChange(true);
            resetForm();
        }
        } catch (err) {
            console.error(err);
            
            setError("Error al cambiar la contraseña. Verifique los datos e intente nuevamente.");
            setTimeout(() => setError(""), 3000);
        } finally {
            setLoading(false);
        }
    };

    // Resetear formulario
    const resetForm = () => {
        setEnteredCurrentPassword("");
        setNewPassword("");
        setConditions({
        hasUpperCase: false,
        hasLowerCase: false,
        hasMinLength: false,
        hasNoSpaces: false,
        hasNumber: false,
        hasSpecialChar: false,
        });
        setTimeout(() => setSuccessChange(false), 3000);
    };

    
    return {
        enteredCurrentPassword,
        newPassword,
        conditions,
        loading,
        error,
        handleCurrentPasswordChange,
        handleNewPasswordChange,
        changePassword,
        isFormValid,
        successChange,
    }

}