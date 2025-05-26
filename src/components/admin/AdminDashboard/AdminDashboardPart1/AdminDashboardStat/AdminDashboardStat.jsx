import React from 'react'

const AdminDashboardStat = ({title, statNumber, icon}) => {

    const currentMonthLabel = new Date().toLocaleString('default', { month: 'long' });

  return (
    <article className='bg-adminBgWhite p-[12px] rounded-xl flex dark:bg-appBgBlack transition-all duration-300 justify-between items-center shadow-[0px_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.2)] 1780:flex-1 1780:gap-[20px] 1780:min-w-[248px] '>
      <div className='flex flex-col gap-[12px] justify-between'>
        <h3 className=' transition-all duration-300 text-[14px] text-dashboardPurpleBg font-bold'
        >
            {title}
        </h3>
        <div className=' transition-all duration-300 text-[26px] text-[#707070]  dark:text-textWhiteTransparent font-semibold 1500:text-[20px]'>
            {statNumber}
        </div>
      </div>

      <div>
        <div className='flex rounded-full bg-dashboardPurpleBg w-[60px] h-[60px] items-center justify-center'>
            <i className={`fa-solid ${icon} text-xl text-textWhiteTransparent transition-all duration-300`}></i>
        </div>
      </div>
    </article>
  )
}

export default AdminDashboardStat
