import React, { useEffect, useState } from 'react'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext';
import { formatFullDate, formatTime } from '../../../../../utils/adminFormat';

const AdminRequestCardHeader = ({
    id,
    userId,
    cityId,
    nameCity,
    deliveryMethod,
    status,
    statusLabel,
    quantity,
    createdDate,
}) => {

    const {users} = useAdminUsersContext()
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setUser(users.find(user => user.id === userId))
    })
    

    const getDeliveryMethodText = (method) => {
        return method === 0 ? "Recojo en tienda" : "Envío a domicilio"
    }

    const statusBgColor = status === 0 ? "bg-[#F9ECBD]" : status === 1 ? "bg-[#B6F4C8]" : "bg-[#FBC5C5]";
    const statusTextColor = status === 0 ? "text-adminTextPending" : status === 1 ? "text-success" : "text-logOut";
    const methodTextColor = cityId === 0 ? "text-blue-500" : "text-[#E56E53]";

  return (
    <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-[6px] flex-1 h-14">
                <div className="w-14 h-full  bg-gray-200 rounded-md overflow-hidden">
                    <img 
                        src="https://i.pinimg.com/1200x/0b/9d/61/0b9d61e37b8aaa8258b4fd82881c6e0b.jpg"
                        alt="Nombre Usuario" className="w-full h-full object-cover" />
                </div>

                <div className='flex flex-col justify-between'>
                    <h3 className="text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default text-[14px] 1500:text-[12px] capitalize">
                        {user?.userName || "XXXXXXXXXXXXX"}
                    </h3>
                    <p className="text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default text-[14px] 1500:text-[12px] leading-tight">
                        Orden #{id}
                    </p>
                    <div className={`flex items-center ${methodTextColor} font-bold text-[14px] 1500:text-[12px] leading-tight cursor-default`}>
                        {getDeliveryMethodText(cityId)}
                    </div>

                </div>
            </div>

            <div className={`h-14 flex flex-col justify-between items-end`}>
                <div className={`${statusBgColor} w-[100px] rounded-[4px] flex justify-center items-center`}>
                    <span 
                        className={`capitalize text-[14px] 1500:text-[12px] font-semibold py-[2px] px-[10px] ${statusTextColor} transition-all duration-300 cursor-default`}
                    >
                        {statusLabel?.toLowerCase()}
                    </span>
                </div>
                {
                    cityId !== 0 &&
                    <div>
                        <span 
                            className={`capitalize text-center text-[14px] 1500:text-[12px] text-[#818181] dark:text-adminTextWhite transition-all duration-300 cursor-default`}
                        >
                            {nameCity?.toLowerCase()}
                        </span>
                    </div>
                }
            </div>
        </div>

        <div className="flex justify-between">
            <div className='flex items-center gap-[8px]'>
                <span className='normalAdminText text-[#818181]'>
                    {formatFullDate(createdDate)}
                </span>

                <span className='normalAdminText text-[#818181]'>
                    {formatTime(createdDate)}
                </span>

            </div>
            <div>
                <span className='normalAdminText text-[#818181]'>
                    {quantity} Items
                </span>
            </div>
        </div>
    </div>
  )
}

export default AdminRequestCardHeader
