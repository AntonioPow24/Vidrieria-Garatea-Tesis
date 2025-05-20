
const SearchContainer = ({ query, handleSearch, placeholder }) => {

    const searchStyle = "flex gap-3 items-center rounded-[6px] w-[500px] h-[42px] bg-adminBgWhite px-[12px] dark:bg-appBgBlack transition-all duration-300 1500:w-[260px]"

  return (
    <section className="flex justify-between">
      <div className={ searchStyle }>
        <input 
          type="text" 
          placeholder={placeholder} 
          className="h-full w-full border-none bg-transparent outline-none text-adminTextDark dark:text-adminTextWhite text-[18px] transition-all duration-300 1500to1650:text-[16px] 1500:text-[14px]"
          value={ query } 
          onChange={ handleSearch } 
        />
      </div>
    </section>
  )
}

export default SearchContainer
