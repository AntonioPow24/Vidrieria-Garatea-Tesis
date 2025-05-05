import React from 'react'

const PaidStepsComplete = () => {
  return (
    <div className='flex flex-col gap-2 flex-1 justify-between ipad:items-center'>
      <div className='w-full '>
        <h4 className='text-[20px] text-text-white ipad:text-center'>Cómo pago mi pedido?</h4>
      </div>

      <div className='flex gap-2 580:flex-col 580:gap-6'>
        <div className=' w-[240px] h-[300px] rounded-[10px] overflow-hidden'>
          <img 
            src="https://i.ibb.co/VZtxcsD/Frame-5.png" 
            alt=""
            className='w-full h-full object-cover' 
          />
        </div>
        <div className=' w-[240px] h-[300px] rounded-[10px] overflow-hidden'>
          <img 
            src="https://i.ibb.co/Jjwfp6Ln/Frame-6-2.png" 
            alt=""
            className='w-full h-full object-cover' 
          />
        </div>
      </div>
    </div>
  )
}

export default PaidStepsComplete
