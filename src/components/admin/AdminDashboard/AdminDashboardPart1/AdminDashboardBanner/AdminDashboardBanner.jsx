import React from 'react'
import { getBannerData } from '../../../../../utils/dashboardFunctions'
import { getCurrentDateBanner } from '../../../../../utils/formatDate'
import { useBannerData } from '../../../../../hooks/AdminDashboardHooks/useBannerData'

const AdminDashboardBanner = () => {

    const { greeting, image, message } = useBannerData()
  return (
    <div className="w-full h-full relative flex justify-start p-[18px]">
      <img
        src={image}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="z-10 flex flex-col justify-between">
        <div className='flex '>
            <span className='text-text-white  bg-[#0004] rounded-[8px] px-4 py-1 text-[14px] font-semibold'>
                { getCurrentDateBanner() }
            </span>
        </div>
        <div className='flex flex-col gap-2'>
            <div className="text-2xl text-text-white bg-[#0004] rounded-[8px] px-4 py-1">
                {greeting}, Vidrieria Garatea!
            </div>
            <div className="text-text-white ">
                <span className='text-text-white  bg-[#0004] rounded-[8px] px-4 py-1 text-[14px] font-semibold'>
                    {message}
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardBanner
