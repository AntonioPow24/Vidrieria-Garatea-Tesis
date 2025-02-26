import '../../../../styles/user/shop/shop.css'

const ShopHeader = ({ title }) => {

    return (
        <header className='h-[480px] relative 580:h-[400px]'>
            <div className='banner w-full h-full brightness-[90%] px-[10%] flex items-center'>
                <div className="flex items-center justify-center gap-[8%] w-full laptop:pt-[70px] 580:flex-col 580:gap-5 ">
                    <img 
                        className='849:w-[120px]'
                        src="https://i.postimg.cc/hP9CmSTG/cart-Banner.png" 
                    />
                    <span className='text-7xl uppercase text-text-white 849:text-4xl 580:text-center pr-2 580:pr-0 bigTablet:text-center'>{ title  || 'Articulos' }</span>
                </div>
            </div>
        </header>
      )
}

export default ShopHeader
