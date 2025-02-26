import React from 'react'

const RequestDetailItem = ({ productId, titleName, price, quantity, category, imageUrl }) => {
  return (
    <article className='px-[14px] py-[12px] flex justify-between items-center border-textWhiteTransparent border-t-[1px] h-[100px] 580:h-[80px] 580:px-[6px]'>

        <div className='flex w-[75px] h-full p-[2px]  580:w-[55px]'>
            <div className='w-full h-full flex justify-center items-cente'>
                <img src={ imageUrl } className=' object-cover '/>
            </div>
        </div>

        <div className='flex flex-col gap-[6px] w-[180px] h-full justify-start 580:w-[100px]'>
            <div className='flex justify-center items-center w-full'>
                <span className='text-text-white text-[16px] 580:text-[10px]'>Título del producto</span>
            </div>

            <div className='flex justify-center items-center w-full'>
                <span className='text-textWhiteTransparent text-[14px] text-center 580:text-[8px]'>{ titleName }</span>
            </div>
        </div>

        <div className='flex flex-col gap-[6px] w-[80px] h-full justify-start '>
            <div className='flex justify-center items-center w-full'>
                <span className='text-text-white text-[16px]  580:text-[10px]'>Cantidad</span>
            </div>

            <div className='flex justify-center items-center w-full'>
                <span className='text-textWhiteTransparent text-[14px] text-center 580:text-[10px]'>{ quantity }</span>
            </div>
        </div>

        <div className='flex flex-col gap-[6px] w-[80px] h-full justify-start '>
            <div className='flex justify-center items-center w-full'>
                <span className='text-text-white text-[16px]  580:text-[10px]'>Precio</span>
            </div>

            <div className='flex justify-center items-center w-full'>
                <span className='text-textWhiteTransparent text-[14px] text-center 580:text-[10px]'>S/.{ price.toFixed(2) }</span>
            </div>
        </div>
    </article>
  )
}

export default RequestDetailItem
