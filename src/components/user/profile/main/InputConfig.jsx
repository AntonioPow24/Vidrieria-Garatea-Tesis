import { useState } from "react";

const InputConfig = ({label, type, value, name, onChange, style, required}) => {

      const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)
      const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
      }

    return (
      <div className={ `${style} flex flex-col gap-2 min-w-[349px] flex-1` }>
  
          {
            label && 
            <label 
            htmlFor={ name }
            className='text-xl text-gray-400'
            >
              { label }
            </label>
          }
          <div className={`rounded-[4px] bg-[#363636] outline-none text-text-white px-4 py-2 ${type === 'password' && 'flex justify-between items-center gap-4'}`}>
            <input
                className=' bg-transparent outline-none text-text-white text-xl w-full' 
                type={ type === 'password' && isPasswordVisible ? 'text' : type }
                value={ value }
                name={ name }
                onChange={ onChange }
                required={ required }
            />

            {type === 'password' &&
              <i
              className={`fa-solid ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} text-text-white cursor-pointer`}
              onClick={togglePasswordVisibility}
              ></i>
            }
          </div>
      </div>
    )
  }
  
  export default InputConfig