import React, { useState } from 'react'

const RequestDelivery = ({ deliveryMethod, setCity, deliveryCost, handleDeliveryChange, city, allCities  }) => {

  return (
    <div className='flex flex-col gap-[10px]'>

      <div className='w-full flex justify-start'>
        <span className='text-textWhiteTransparent text-[18px] smallTablet:text-[14px]'>Elija el metodo de entrega:</span>
      </div>

      <div className='flex flex-col gap-[16px]'>
          <div className=' w-full flex justify-start'>
            <label className='text-text-white text-[14px] flex items-center gap-2 smallTablet:text-[12px]'>
              <input
                className='' 
                type="radio" 
                name="deliveryMethod" 
                value="gratis" 
                checked={deliveryMethod === 'gratis'} 
                onChange={() => handleDeliveryChange('gratis')} 
              />
              Recojo en tienda <span className='text-[14px] text-success smallTablet:text-[12px]'>Gratis</span>
            </label>
          </div>

          <div className=' w-full flex justify-start gap-[20px] h-[34px] smallTablet:gap-[4px]'>
            <label className='text-text-white text-[14px] flex items-center gap-2 smallTablet:text-[12px]'>
                <input 
                type="radio" 
                name="deliveryMethod" 
                value="domicilio" 
                checked={deliveryMethod === 'domicilio'} 
                onChange={() => handleDeliveryChange('domicilio')} 
                />
              Entrega a domicilio  <span className='text-[16px] font-semibold text-skyBlueApp w-[58px] smallTablet:text-[12px]'>(S/. {deliveryCost})</span>
            </label>

            {/* EN CASO SE ESCOGA DOMOCILIO */}
            {deliveryMethod === 'domicilio' && (
              <div className='flex gap-4 rounded-[6px] overflow-hidden flex-1 px-1 bg-[#3D3D3D] z-20'>
                  <select 
                    className='p-[5px] text-text-white border-none  outline-none text-[14px] overflow-hidden smallTablet:text-[12px] flex-1 bg-transparent'
                    onChange={(e) => setCity(Number(e.target.value))}
                    value={ city }
                  >
                    {
                      allCities.map((city) => (
                        <option 
                          value={ city.id } 
                          key={ city.id }
                          className='bg-[#3D3D3D] text-text-white text-[14px] smallTablet:text-[12px]' 
                        >
                          { city.nameCity }
                        </option>
                      ))
                    }
                  </select>
              </div>
            )}
          </div>

      </div>



    </div>
  )
}

export default RequestDelivery
