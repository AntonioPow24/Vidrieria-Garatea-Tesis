const LineMessage = ({ message, type, style }) => {

    const colorMessage = type === 'error' ? 'text-logOut' : 'text-success'
  
    return (
      <p className={`${ colorMessage } ${ style } text-base font-medium`}>
          { message }
      </p>
    )
  }
  
  export default LineMessage