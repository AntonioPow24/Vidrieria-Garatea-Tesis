import React from 'react'

const PaidQrMethods = () => {
  return (
    <div className='flex-1 flex justify-between gap-[20px] 580:flex-col'>
      <section className='rounded-[10px] px-[12px] py-[8px] bg-[#600E6C] w-[230px] h-[200px] flex flex-col gap-[6px] justify-between'>

            <div className='w-full flex justify-center'>
                    <div className='w-[42px] h-[42px]'>
                        <img 
                            src="https://images.seeklogo.com/logo-png/38/2/yape-logo-png_seeklogo-381640.png" 
                            alt="YAPE"
                            className='w-full object-cover' 
                        />
                    </div>
            </div>

            <div className='w-full flex justify-center'>
                    <div className='w-[86px] h-[86px] bg-appBgWhite rounded-[6px]'>
                        {/* IMAGEN DE QR YAPE */}
                    </div>
            </div>

            <div className='flex flex-col leading-[18px]'>
                <span className='text-center text-text-white text-[14px]'>928517790</span>

                <span className='text-center text-text-white text-[14px]'>Antonio Alfons Garcia Romero</span>
            </div>


      </section>


      <section className='rounded-[10px] px-[12px] py-[8px] bg-[#146278] w-[230px] h-[200px] flex flex-col gap-[6px] justify-between'>

            <div className='w-full flex justify-center'>
                    <div className='w-[42px] h-[42px]'>
                        <img 
                            src="https://images.seeklogo.com/logo-png/38/2/plin-logo-png_seeklogo-386806.png" 
                            alt="YAPE"
                            className='w-full object-cover' 
                        />
                    </div>
            </div>

            <div className='w-full flex justify-center'>
                    <div className='w-[86px] h-[86px] bg-appBgWhite rounded-[6px]'>
                        {/* IMAGEN DE QR PLIN */}
                    </div>
            </div>

            <div className='flex flex-col leading-[18px]'>
                <span className='text-center text-text-white text-[14px]'>928517790</span>

                <span className='text-center text-text-white text-[14px]'>Antonio Alfons Garcia Romero</span>
            </div>


      </section>


    </div>
  )
}

export default PaidQrMethods
