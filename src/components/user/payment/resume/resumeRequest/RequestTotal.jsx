import React from 'react'

import LoadingSpinner from '../../../../shared/LoadingSpinner'

const RequestTotal = ({ subTotalCart, deliveryCost, handleGenerateOrder, isLoading, deliveryMethod, isValidOrder,error }) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <div className='flex flex-col gap-[14px]'>
        <div className='flex justify-between px-[2px]'>
          <span className='text-text-white smallTablet:text-[12px]'>SUBTOTAL PRODUCTOS</span>
          <span className='text-text-white font-medium'>S/. { subTotalCart.toFixed(2) }</span>
        </div>

        <div className='flex justify-between px-[2px]'>
          <span className='text-text-white smallTablet:text-[12px]'>MÉTODO DE ENTREGA</span>
          <span className='text-text-white font-medium'>
            { deliveryMethod === 'gratis' ? 
            <span className='text-success'>Gratis</span> :  
            <span className='text-skyBlueApp'>S/. {deliveryCost.toFixed(2)}</span>  
            }
          </span>
        </div>

        <div className='flex justify-between px-[2px]'>
          <span className='text-text-white smallTablet:text-[12px]'>TOTAL A PAGAR</span>
          <span className='text-text-white font-medium'>S/. { (subTotalCart + deliveryCost).toFixed(2) }</span>
        </div>
      </div>

      <div className='w-full flex items-center flex-col gap-2'>
          <button
            className={`w-full outline-none rounded-[4px] py-2 flex items-center justify-between px-[10px]  transition-all duration-300    ${ isLoading || !isValidOrder ?'bg-gray-400' : isValidOrder && 'bg-[#d43e3e] buttonGenerateOrder'}`}

            disabled ={ !isValidOrder || isLoading }
            
            onClick={ handleGenerateOrder }
          >
            {
              isLoading ?
                <>
                  <span className='text-text-white font-medium valueButtonGenerateOrder transition-all duration-300 smallTablet:text-[14px]'>Generando pedido...</span>
                </> 

              :

                <>
                  <span className='text-text-white font-medium valueButtonGenerateOrder transition-all duration-300 smallTablet:text-[14px]'>Generar pedido de compra</span>
                  <span className='text-text-white font-medium valueButtonGenerateOrder transition-all duration-300'>S/. { (subTotalCart + deliveryCost).toFixed(2) }</span>
                </>

            }






          </button>

          {
            error && <p className='text-logOut'>Hubo un error al generar el pedido</p>
          }
      </div>
    </div>
  )
}

export default RequestTotal
