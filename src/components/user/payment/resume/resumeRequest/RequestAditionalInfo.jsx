import { useEffect } from 'react'
import { useAdditionalInfo } from '../../../../../hooks/ResumeRequest/useAdditionalInfo'

const RequestAditionalInfo = ({ setDNI, setPhoneNumber, setAddress, deliveryMethod }) => {

  const {
    dni, phone,
    dniError, phoneError,
    handleDniChange, handlePhoneChange,
    validateAll
  } = useAdditionalInfo(setDNI, setPhoneNumber)

  useEffect(() => {
    validateAll()
  }, [])

  return (
    <div className='flex flex-col gap-[10px]'>
      <div className='w-full flex justify-start'>
        <span className='text-textWhiteTransparent text-[18px] smallTablet:text-[14px]'>Complete campos adicionales</span>
      </div>

      <div className='flex flex-col gap-[20px]'>

        <div className='flex gap-4 455:flex-col'>
          <div className='flex flex-col w-[50%] 455:w-full'>
            <input
              type="text"
              placeholder="DNI"
              maxLength={8}
              value={dni}
              onChange={handleDniChange}
              className="bg-[#3D3D3D] px-[10px] py-[6px] text-text-white rounded-[4px] border-none outline-none smallTablet:text-[12px]"
              required
            />
            {dniError && <span className='text-logOut text-[12px] mt-1'>{dniError}</span>}
          </div>

          <div className='flex flex-col w-[50%] 455:w-full'>
            <input
              type="text"
              placeholder="Numero de celular"
              maxLength={9}
              value={phone}
              onChange={handlePhoneChange}
              className="bg-[#3D3D3D] px-[10px] py-[6px] text-text-white rounded-[4px] border-none outline-none smallTablet:text-[12px]"
              required
            />
            {phoneError && <span className='text-logOut text-[12px] mt-1'>{phoneError}</span>}
          </div>
        </div>
        {
          deliveryMethod === 'domicilio' &&
        
          <div className='flex flex-col justify-center flex-1 gap-2  1070:max-w-[100%]'>
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
