import React from 'react'

const DataField = ({ label, field }) => {
  return (
    <div className='flex justify-between items-center'>
        <h4 className='text-[14px] text-[#949494] 1570:text-[12px] '>{ label }</h4>
        <span className='text-text-white text-center text-[14px] 1570:text-[12px]'>{ field }</span>
    </div>
  )
}

export default DataField
