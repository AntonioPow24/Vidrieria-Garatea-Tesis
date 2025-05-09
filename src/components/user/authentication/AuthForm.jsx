import { useEffect, useState } from 'react';
import { useAuth } from '../../../context/UserContext';
import AuthInput from './AuthInput'
import PasswordCondition from '../profile/main/PasswordCondition';
import { usePasswordValidation } from '../../../hooks/ProfileHooks/usePasswordValidation';


const AuthForm = ({ methodForm,closeAuth }) => {

    const { login,register, error, loading } = useAuth();

    const { conditions, validatePassword } = usePasswordValidation();


    const [ formData, setFormData ] = useState({
        email:'',
        password:'',
        userName:'',
        lastName:'',
    })

    
    const [isPasswordValid, setIsPasswordValid] = useState(false);


    
    // Usar useEffect para validar la contraseña solo cuando el usuario escriba
    useEffect(() => {
        if (methodForm === 'register') {
        setIsPasswordValid(validatePassword(formData.password));
        }
    }, [formData.password, methodForm]);


    // Manejo del cambio en los inputs
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        if (name === "password" && methodForm === "register") {
          validatePassword(value);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          alert("Por favor, ingresa un correo electrónico válido.");
          return;
        }


        if( methodForm === 'login'){
            await login(formData.email, formData.password, closeAuth);
        } else if (methodForm === 'register') {
            await register(formData, closeAuth);
        }
    };

    // Validar si el formulario es válido
    const isFormValid =
        methodForm === 'login'
        ? formData.email && formData.password
        : formData.email && isPasswordValid && formData.userName && formData.lastName;


  return (
    <div className={`formBox z-10 ${methodForm}`}>
        <form className={`formAuth ${ methodForm === 'register' && 'register' } `}>
            <h2 className='text-[32px] font-medium text-text-white'>{methodForm === 'login'? 'Ingresar' : 'Registrarse'}</h2>
            

                <AuthInput 
                    type={'email'}
                    name={'email'}
                    placeholder={ 'Correo de usuario' }
                    required={ true }
                    iconClass={ 'fa-solid fa-user' }
                    value={ formData.email }
                    onChange={ handleOnChange }
                    inputStyle={ 'inputBox' }
                />
            
                <AuthInput 
                    type={'password'}
                    name={'password'}
                    placeholder={ 'Contraseña' }
                    required={ true }
                    iconClass={ 'fa-solid fa-lock' }
                    value={ formData.password }
                    onChange={ handleOnChange }
                    inputStyle={ 'inputBox' }
                />

                {methodForm === "register" && (
                    <ul className="flex gap-[25px] flex-wrap">
                        <PasswordCondition condition={conditions.hasUpperCase} label="1 mayúscula" antoherClass='text-[12px]'/>
                        <PasswordCondition condition={conditions.hasLowerCase} label="1 minúscula" antoherClass='text-[12px]'/>
                        <PasswordCondition condition={conditions.hasMinLength} label="min. 8 caracteres" antoherClass='text-[12px]'/>
                        <PasswordCondition condition={conditions.hasNumber} label="1 número" antoherClass='text-[12px]'/>
                        <PasswordCondition condition={conditions.hasSpecialChar} label="1 caracter especial" antoherClass='text-[12px]'/>
                    </ul>
                )}

                 {/* Campos adicionales para registro */}
                 {methodForm === 'register' && (
                    <>
                        <AuthInput
                            type="text"
                            name="userName"
                            placeholder="Nombre"
                            required={true}
                            iconClass="fa-solid fa-user"
                            value={formData.userName}
                            onChange={handleOnChange}
                            inputStyle="inputBox"
                        />

                        <AuthInput
                            type="text"
                            name="lastName"
                            placeholder="Apellidos"
                            required={true}
                            iconClass="fa-solid fa-user"
                            value={formData.lastName}
                            onChange={handleOnChange}
                            inputStyle="inputBox"
                        />

                    </>
                )}


            <button
                className={`w-[100%] h-[48px] ${
                        isFormValid ? "bg-[#48acca] hover:bg-[#59c5e6]" : "bg-gray-400 cursor-not-allowed"
                        }] rounded-[8px] border-none shadow-sm cursor-pointer font-medium text-text-white transition-all duration-300 text-[20px]`} 
                type="submit" 
                disabled={loading || !isFormValid}
                onClick={ handleSubmit }
            >
                <span>{loading ? 'Cargando...' : methodForm ==='login' ? 'Iniciar sesión' : 'Crear cuenta'}</span> 
            </button>

        </form>
    </div>
  )
}

export default AuthForm
