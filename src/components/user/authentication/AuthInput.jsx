

const AuthInput = ({ type, placeholder, required, iconClass, value, onChange,inputStyle,name }) => {
  return (
    <div className={ inputStyle }>
      <input 
        type={ type }
        name={ name } 
        placeholder={ placeholder }
        required={ required }
        value={ value }
        onChange={ onChange }
        className='w-[100%] bg-adminTextDark rounded-[8px] outline-none border-none text-[16px] text-text-white' 
      />

      <i className={`${iconClass} text-text-white`}></i>
    </div>
  )
}

export default AuthInput
