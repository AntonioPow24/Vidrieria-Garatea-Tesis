import React from 'react'

const AdminDashboardTableTR = ({
    id,
    titleName,
    description,
    price,
    valorization,
    stock,
    images,
}) => {
  return (
    <tr className='border-t border-adminBorderDark dark:border-[#f5f5f517] transition-all duration-300'>
      <td className='text-[14px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default flex items-center gap-[4px] my-1 overflow-hidden'>
        <div className='flex items-center justify-center w-[40px] h-[40px] p-1 rounded-[4px] overflow-hidden bg-[#4747470c] dark:bg-[#eeeeee13] transition-all duration-300'>
            <img
                src={images[0].url}
                alt={titleName}
                className='w-full h-full object-contain'
            />
        </div>
        {titleName}
      </td>

      <td className='text-center cursor-default'>
        <span className='text-[16px] text-adminTextPurple transition-all duration-300 font-semibold'>
          {valorization}
        </span>
      </td>

      <td className='text-center cursor-default'>
        <span className='text-[14px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 '>
          S/. {price.toFixed(2)}
        </span>
      </td>

      <td className='text-center cursor-default'>
        <span className='text-[14px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 '>
          {stock}
        </span>
      </td>
    </tr>
  )
}

export default AdminDashboardTableTR
