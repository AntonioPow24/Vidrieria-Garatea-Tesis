
const HeaderConfig = ({ titleHeader }) => {
  return (
    <header className='pt-[240px] pb-[63px] px-[3%] bg-bgContactHeader'>

        <div className="flex items-center gap-7 1070:gap-4">
            <i className="fa-solid fa-gears text-6xl text-text-white 1070:text-3xl"></i>
            <h2 className='text-6xl text-text-white 1070:text-3xl'>{ titleHeader }</h2>
        </div>
    </header>
  )
}

export default HeaderConfig