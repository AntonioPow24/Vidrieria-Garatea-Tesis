import React from 'react'

const RequestAditionalInfo = ({ setDNI, setPhoneNumber, setAddress, deliveryMethod }) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <div className='w-full flex justify-start'>
        <span className='text-textWhiteTransparent text-[18px] smallTablet:text-[14px]'>Complete campos adicionales</span>
      </div>

      <div className='flex flex-col gap-[20px]'>

        <div className='flex gap-4'>
          <input 
            className="bg-[#3D3D3D] px-[10px] py-[6px] text-text-white rounded-[4px] border-none outline-none w-[166px] 1070:w-[50%] smallTablet:text-[12px]"
            type="text" 
            placeholder="DNI"
            onChange={(e) => setDNI(e.target.value)} 
            required 
          />

          <input 
            className="bg-[#3D3D3D] px-[10px] py-[6px] text-text-white rounded-[4px] border-none outline-none w-[166px] 1070:w-[50%] smallTablet:text-[12px]"
            type="text" 
            placeholder="Numero de celular"
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>
        {
          deliveryMethod === 'domicilio' &&
        
          <div className='flex flex-col justify-center w-full gap-2 max-w-[348px] 1070:max-w-[100%]'>
              <input 
                className="bg-[#3D3D3D] px-[10px] py-[6px] text-text-white rounded-[4px] border-none outline-none w-full smallTablet:text-[12px]"
                type="text" 
                placeholder="Direccion completa (se verifica ciudad)"
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />

              <span className='text-[12px] text-skyBlueApp'>El pedido no se completará hasta verificar que la dirección coincide con la ciudad</span>
          </div>
        }
      </div>
    </div>
  )
}

export default RequestAditionalInfo
