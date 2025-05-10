import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductStars from './ProductStars'
import { useCartContext } from '../../../../context/CartContext'

// NO OLVIDES QUE ESTAMOS TRABAJANDO CON DATA DE PRUEBA, ASI QUE FALTA DESCOMENTAR EN USERPRODUCTSCONTEXT 
// LA BUSQUEDA ES LOCAL, ASI QUE SOLO TRAEMOS DATA DE PRODUCTOS DE ACUERDO A LA CATEGORIA ACTUAL, ESO LO FILTRAMOPS DE ACUERDO AL VALOR DEL QUERY DE INPUT SEARCH

const ProductCard = ({id,images,titleName,price, valorization}) => {

  const {categoryName}  = useParams()

  const { addProductToCart } = useCartContext()

  return (
    <article className=' p-[20px] rounded-[16px] flex flex-col gap-[20px] productCard relative justify-between items-center overflow-hidden h-[400px]'>
        <Link
          className='flex w-full h-[196px]  z-[2]'
          to={ `/tienda/${categoryName}/${id}` }
        >
          
          <div className='flex justify-center items-center py-[2px] w-full'>
              <img 
                src={ images?.length && images[0].url } 
                alt={ titleName }
                className='object-cover h-full' 
              />
          </div>
        </Link>

        <section className='flex gap-[12px] flex-col z-[2] w-full h-[82px]'>
          <span className='h-[44px] text-start text-textDark text-[18px] leading-[22px] overflow-hidden'>{ titleName }</span>

          <div className='flex justify-between h-[24px] items-center'>
              <ProductStars 
                valorization={ valorization } 
                color1={'text-[#171717B3]'} 
                color2={'text-gray-400'}
              />

              <span className='text-textDark text-[22px]'>S/. { price.toFixed(2) }</span>
          </div>
        </section>

        <button 
          className='py-[12px] w-full flex gap-4 z-[2] border-appBgBlack border-[1px] justify-center items-center rounded-[6px] h-[42px] hover:bg-appBgBlack transition-all duration-300 addCartProductShop'
          onClick={ () => addProductToCart( id, 1 ) }
          >
              <span className='text-[16px] text-textDark transition-all duration-300 buttonIntoProductCard'>
                Agregar al carrito
              </span>

              <i className="fa-solid fa-cart-shopping text-textDark pt-[2px] transition-all duration-300 buttonIntoProductCard"></i>
        </button>

    </article>
  )
}

export default ProductCard
