const ProductSearch = ({ containerStyle, query, handleSearch }) => {


    return (
      <div className={ containerStyle }>
        <i className="fa-solid fa-magnifying-glass text-[22px] text-adminTextWhite dark:text-adminTextWhite transition-all duration-300"></i>
  
        <input 
        type="text" 
        className="h-full w-full border-none bg-transparent outline-none text-adminTextDark dark:text-adminTextWhite text-xl transition-all duration-300"
        placeholder="Buscar producto"
        value={ query }
        onChange={ handleSearch }
        />
      </div>
    )
  }
  
  export default ProductSearch