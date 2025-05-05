
const SearchContainer = ({ query, handleSearch }) => {

    const searchStyle = "flex gap-3 items-center rounded-[6px] max-w-[542px] w-full h-[42px] bg-adminBgWhite px-[10px] dark:bg-appBgBlack transition-all duration-300"

  return (
    <section className="flex justify-between">
      <div className={ searchStyle }>

    
        <input 
          type="text" 
          placeholder="Buscar usuario por nombre o correo" 
          className="h-full w-full border-none bg-transparent outline-none text-adminTextDark dark:text-adminTextWhite text-xl transition-all duration-300"
          value={ query } 
          onChange={ handleSearch } 
        />
      </div>
    </section>
  )
}

export default SearchContainer
