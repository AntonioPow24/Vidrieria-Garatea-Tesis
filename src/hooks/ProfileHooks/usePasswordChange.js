import { useState } from "react"
import { usePasswordValidation } from "./usePasswordValidation";


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



        if (!isFormValid) {
        setError("Por favor, complete los campos correctamente.");
        return;
        }

        setLoading(true);
        setError("");

        try {
        // Realizar solicitud al backend
        const response = await axios.post("/api/auth/change-password", {
            currentPassword: enteredCurrentPassword,
            newPassword: newPassword,
        });

        if (response.status === 200) {
            setSuccessChange(true);
            resetForm();
        }
        } catch (err) {
        setError("Error al cambiar la contraseña. Verifique los datos e intente nuevamente.");
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