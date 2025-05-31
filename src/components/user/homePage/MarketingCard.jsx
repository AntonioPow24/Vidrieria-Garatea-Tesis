import React from 'react'
import { useCartContext } from '../../../context/CartContext'

const MarketingCard = ( { product } ) => {

  // Funcion de agregar carrito del Context
  const { addProductToCart } = useCartContext()

  // Destructurar el product
  const {id,titleName,images,price} = product


  // Estilos para el maquetado

  const containerStyle='marketingCard p-[10px] flex  rounded-[16px] '

  const buttonStyle= 'bg-text-blueClient px-[16px] py-[7px] text-base text-text-white rounded-[6px] flex gap-3 items-center justify-center hover:bg-[#606bd1] transition-all duration-300'

  return (
    <article className={`${containerStyle} 500:flex-col gap-2`}>
      <div className="flex items-center justify-center w-[200px] h-[140px] 500:w-full">
        <img 
            className='object-contain w-full h-full' 
            src={images?.[0].url} 
            alt={`imagen de ${titleName}`} 
        />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className='flex flex-col gap-4 bigPhone:mt-0 '>
          <h3 className='text-textDark  text-[16px] text-center bigPhone:text-[14px]'>{titleName}</h3>

          <div className="flex gap-3 items-center justify-center">

            <span className='text-[14px]'>{`S/. ${price.toFixed(2)}`}</span>

          </div>
        </div>

        <button 
          className={`${buttonStyle}`}
          onClick={ () => { if(id) return addProductToCart( id, 1 ) }}
        >
          <span className='580:text-[14px]'>Agregar al carrito</span>
          <i className="fa-solid fa-cart-shopping mt-[2px]"></i>
        </button>

      </div>
    </article>
  )
}

export default MarketingCard
