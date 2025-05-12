import { useState } from "react";


const AuthInput = ({ type, placeholder, required, iconClass, value, onChange,inputStyle,name }) => {

  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div className={ inputStyle }>
      <input 
        type={ type === 'password' && isPasswordVisible ? 'text' : type }
        name={ name } 
        placeholder={ placeholder }
        required={ required }
        value={ value }
        onChange={ onChange }
        className='w-[100%] bg-adminTextDark rounded-[8px] outline-none border-none text-[16px] text-text-white' 
      />

      {type === 'password' ? 
        <i
          className={`fa-solid ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} text-text-white cursor-pointer`}
          onClick={togglePasswordVisibility}
        ></i>
        : 
        <i className={`${iconClass} text-text-white`}></i>
      }
    </div>
  )
}

export default AuthInput
