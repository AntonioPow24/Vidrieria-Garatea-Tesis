

const AdminInputForm = ({ type, placeholder, name, label, iconLabel='', value, onChange, containerStyle, inputStyle, labelStyle }) => {
    return (
      <div className={ `${ containerStyle }` }>
  
          <div className='flex'>
              <label htmlFor={ name } className={ labelStyle } >{ label }</label>
          </div>
        
  
  
          {type === 'textarea' ? (
              <textarea
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                  className={inputStyle}
              />
                ) : (
              <input
                  required={ true }
                  name={ name }
                  type={ type }
                  value={ value }
                  onChange={ onChange }
                  placeholder={ placeholder }
                  className={ inputStyle }
              />
          )}
  
      </div>
    )
  }
  
  export default AdminInputForm
  