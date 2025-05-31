import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserProductsContext } from '../../../context/ProductsContext/UserProductsContext'
import MarketingCard from './MarketingCard'

const HomeMarketingCards = () => {

  // USEROUTER
  const navigate = useNavigate()

  const { twoTopProducts } = useUserProductsContext()


  // Estilos para el Maquetado
  const containerStyle= 'bg-appBgBlack px-[132px] 685:px-[10px]  flex justify-center  py-[52px] '
  const buttonStyle ='px-[25px] flex items-center justify-center  rounded-[10px] text-xl py-[10px] gap-[12px] w-[210px] transitionn-all duration-300 bigPhone:w-[260px]'

  const [topProducts, setTopProducts] = useState([])

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const top = await twoTopProducts();
        setTopProducts(top);
      } catch (error) {
        console.error("Error fetching top products:", error);
      }
    };

    fetchTopProducts();
  },[twoTopProducts]);



  // Funcion para el navigate
  const handleNavigate = (path) =>{
    navigate( path )
  }

  return (
    <section className={`${containerStyle} 1570:flex-col-reverse 1570:items-center 1570:gap-12`}>
          <div className="px-[50px] flex gap-[52px] 1570:px-[20px] 1070:flex-col bigTablet:gap-8">
            {
              topProducts && topProducts.map( product => 
                <MarketingCard 
                    product={product} 
                    key={product.id}
                />)
            }
          </div>


          <div className="flex  1570:items-center flex-col pt-4 gap-6">
            <h3 className='text-text-white text-[30px] tablet:text-center'>
              Conoce todos nuestros <span className='text-skyBlueApp font-medium'>productos!</span>
            </h3>

            <div className="flex gap-[27px] bigPhone:flex-col ">

              <button 
                className={`${buttonStyle} bg-skyBlueApp text-textDark hover:bg-[#61d1f3]`}
                onClick={() => handleNavigate('/tienda/siliconas')}
              >
                <span>Ir a la tienda</span>
                <i className="fa-solid fa-bag-shopping"></i>
              </button>

            </div>

          </div>
    </section>
  )
}

export default HomeMarketingCards
