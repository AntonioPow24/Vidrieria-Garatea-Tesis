import React from 'react'

const PaidBancaMethods = () => {
  return (
    <div className='flex flex-col gap-[22px] flex-1 justify-center max-w-[410px]'>
        <div className='flex gap-[10px] h-[70px] items-center 580:flex-col 580:h-[120px]'>
            <div className='w-[130px] h-full rounded-[6px] overflow-hidden flex items-center justify-center bg-[#023dc9]'>
                <img 
                    src="https://ingenieriacivilyconstruccion.com/wp-content/uploads/2024/12/Icono-1.png" 
                    alt="BCP"
                    className='w-full object-cover' 
                />
            </div>

            <div className='flex flex-col justify-center'>
                <div className='w-full flex items-center justify-start gap-[6px] 580:justify-center'>
                    <span className='text-text-white text-[14px]'>Cta. corriente soles:</span>
                    <span className='text-text-white'>310-2309097-0-24</span>
                </div>
                <div className='w-full flex items-center justify-start gap-[6px] 580:justify-center'>
                    <span className='text-text-white text-[14px]'>CCI:</span>
                    <span className='text-text-white'>002-310002309097024-17</span>
                </div>
            </div>
        </div>

        <div className='flex gap-[10px] h-[70px] items-center 580:flex-col 580:h-[120px]'>
            <div className='w-[130px] h-full rounded-[6px] overflow-hidden bg-[#cc2229] flex justify-center items-center p-2'>
                <img 
                    src="https://www.pnguniverse.com/wp-content/uploads/2021/05/Scotiabankk-03c97a0c.png" 
                    alt="SCOTIABANK"
                    className='w-full object-fill' 
                />
            </div>

            <div className='flex flex-col justify-center'>
                <div className='w-full flex items-center justify-start gap-[6px] 580:justify-center'>
                    <span className='text-text-white text-[14px]'>Cta. corriente soles:</span>
                    <span className='text-text-white'>755-0341213</span>
                </div>
                <div className='w-full flex items-center justify-start gap-[6px] 580:justify-center'>
                    <span className='text-text-white text-[14px]'>CCI:</span>
                    <span className='text-text-white'>009-755207550341213-02</span>
                </div>
            </div>
        </div>


    </div>
  )
}

export default PaidBancaMethods
