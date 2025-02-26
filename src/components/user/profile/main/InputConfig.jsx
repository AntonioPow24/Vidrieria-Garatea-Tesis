const InputConfig = ({label, type, value, name, onChange, style, required}) => {
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
  
          <input
              className='rounded-[4px] bg-[#363636] outline-none text-text-white px-4 py-2 text-xl' 
              type={ type }
              value={ value}
              name={ name }
              onChange={ onChange }
              required={ required }
          />
      </div>
    )
  }
  
  export default InputConfig