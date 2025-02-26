import React from 'react'
import ProductStars from '../ProductStars'
import { useCartContext } from '../../../../../context/CartContext'

const DetailInfo = ({ productId, titleName, description, price,stock, valorization }) => {

    const { addProductToCart } = useCartContext()

  return (
    <section className='pl-[40px] max-w-[490px] w-full flex flex-col justify-between items-center h-[430px] ipad:pl-0 bigPhone:max-w-[350px]'>
      
        <div className='flex flex-col gap-[10px]'>
            <span className='text-[22px] text-text-white ipad:text-center bigPhone:text-[18px] bigPhone:font-medium'>{titleName}</span>
            <p className='w-[450px] text-[14px] text-textWhiteTransparent bigPhone:max-w-[350px]'>{description}</p>
        </div>

        <section className='flex justify-between w-full'>
            <div className='flex-col flex gap-[10px]'>
                <span className='text-skyBlueApp text-[20px] font-medium bigPhone:text-[16px]'>Precio</span>
                <span className='text-text-white text-[20px] bigPhone:text-[16px]'>S/.{ price.toFixed(2) }</span>
            </div>

            <div className='flex-col flex gap-[10px]'>
                <span className='text-skyBlueApp text-[20px] font-medium bigPhone:text-[16px]'>Stock</span>
                <span className='text-text-white text-[20px] bigPhone:text-[16px]'>{ stock } { stock === 1 ? 'unidad' : 'unidades' }</span>
            </div>

            <div className='flex-col flex gap-[10px] justify-between'>
                <span className='text-skyBlueApp text-[20px] font-medium bigPhone:text-[16px]'>Valorización</span>
                <div className='pb-2'>
                    <ProductStars 
                        valorization={ valorization }
                        color1={ 'text-appBgWhite' }
                        color2={'text-[#F9F9F931]'} 
                    />
                </div>
            </div>
        </section>
        
        <div className='w-full flex justify-start ipad:justify-center'>
            <button
                className='flex gap-3 justify-center items-center bg-appBgWhite w-[200px] rounded-[4px] py-[12px]'
                onClick={ () => addProductToCart( productId, 1 ) }
            >
                <span className='text-[16px] text-textDark'>Agregar al carrito</span>
                <i className="fa-solid fa-cart-shopping text-[18px] text-textDark"></i>
            </button>
        </div>

        <section className='w-full'>
            <div className='w-full flex justify-start items-center border-b border-[#f9f9f931] h-[42px]'>
                <span className='text-text-white text-[10px]'>
                    Despacho en 1-2 días laborales
                </span>
            </div>

            <div className='w-full flex flex-col justify-center items-start border-b border-[#f9f9f931] h-[42px]'>
                <span className='text-text-white text-[10px]'>
                    Delivery Chimbote - S/. 12.00
                </span>
                <span className='text-text-white text-[10px]'>
                    Delivery Nvo. Chimbote - S/. 8.00
                </span>
            </div>
        </section>

    </section>
  )
}

export default DetailInfo
