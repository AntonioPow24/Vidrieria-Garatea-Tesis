


import InputConfig from './InputConfig'
import LineMessage from '../../../shared/LineMessage'
import PasswordCondition from './PasswordCondition'
import { usePasswordChange } from '../../../../hooks/ProfileHooks/usePasswordChange'
import LoadingSpinner from '../../../shared/LoadingSpinner'


const PasswordChangeForm = () => {

    const {
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
      } = usePasswordChange();

  return (

    <>
        <div className='flex gap-[94px] 849:flex-col'>
            <InputConfig 
                label={ 'Contraseña actual:' }  
                name={ 'currentPassword' } 
                type={ 'password' } 
                value={ enteredCurrentPassword } 
                onChange={ handleCurrentPasswordChange } 
            />

            <InputConfig 
                label={ 'Nueva contraseña:' }  
                name={ 'newPassword' } 
                type={ 'text' } 
                value={ newPassword } 
                onChange={ handleNewPasswordChange } 
            />

        </div>




        <ul className='flex gap-[25px] 580:flex-col'>
            <PasswordCondition condition={conditions.hasUpperCase} label="1 mayúscula" />
            <PasswordCondition condition={conditions.hasLowerCase} label="1 minúscula" />
            <PasswordCondition condition={conditions.hasMinLength} label="min. 8 caracteres" />
            <PasswordCondition condition={conditions.hasNumber} label="1 número" />
            <PasswordCondition condition={conditions.hasSpecialChar} label="1 caracter especial" />
        </ul>
        
        {error && <LineMessage message={error} type={"error"} style={"text-center"} />}
        {successChange && <LineMessage message={"Cambio de contraseña exitoso"} style={"text-center"} />}

        <div className="flex justify-center">
            <button
                className={`${!isFormValid || loading ? "bg-gray-400 cursor-not-allowed" : "bg-skyBlueApp hover:bg-[#5dc7e7]"} py-[12px] rounded-[10px] px-[10px] flex gap-3 items-center mt-6 transition-all duration-300 w-[265px] h-[55px] justify-center`}
                onClick={ changePassword }
                disabled={!isFormValid || loading}
            >
                {loading ? 
                <>
                    <span className="text-xl font-medium text-textDark">Cambiando contraseña</span>
                    <LoadingSpinner />
                </>
                 : 
                <>
                    <span className="text-xl font-medium text-textDark">Cambiar contraseña</span>
                    <i className="fa-solid fa-repeat text-textDark text-xl pt-1"></i>
                </>
                }      
            </button>
        </div>

    </>

  )
}

export default PasswordChangeForm