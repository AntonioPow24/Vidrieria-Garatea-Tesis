import React, { useEffect, useState } from 'react'
import TableHead from '../../../../shared/adminTable/TableHead'
import { requestProductsHeadFields } from '../../../../../data/tHeadData'
import TableBody from '../../../../shared/adminTable/TableBody'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext'
import { STATUS_REQUEST_CODES } from '../../../../../data/adminData'

const AdminRequestCardBody = ({
    id,
    userId,
    orderItems,
    address,
    phoneNumber,
    subTotal,
    priceDelivery,
    totalOrder,
    status,
    cityId,
    dni,
}) => {

    const {users} = useAdminUsersContext()
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
            setUser(users.find(user => user.id === userId))
    })

  return (
    <div className='border-t dark:border-[#c5c5c565] pt-[10px] transition-all duration-300 flex-1 flex flex-col'>
        <div className={`${status === STATUS_REQUEST_CODES.CANCELLED_REQUEST_CODE ? "flex-1" : "h-[92px]"}  pb-[10px] border-b dark:border-[#c5c5c565] transition-all duration-300 overflow-y-auto TBodyRequestProducts`}>
            <table className='w-full table-fixed'>
                <TableHead headFieldsData={requestProductsHeadFields} />
                <TableBody 
                    tableName={"requestProductsTable"}
                    tableData={orderItems} 
                />
            </table>
        </div>

        <div className='flex justify-between pt-[10px]'>
                <div className='flex flex-col gap-[6px] flex-1'>
                    <div className='text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-[12px] flex gap-2 items-center'>
                        <i className="fa-solid fa-phone text-[#999] dark:text-adminTextWhite ransition-all duration-300"></i>
                        <span>{phoneNumber && phoneNumber}</span>                      
                    </div>
                    {   cityId !== 0 ?
                        <div className='text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-[12px] flex gap-2 items-center'>
                            <i className="fa-solid fa-location-dot text-[#999] dark:text-adminTextWhite ransition-all duration-300"></i> 
                            <span>{address && address}</span>
                        </div>
                        :
                        <div className='text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-[12px] flex gap-2 items-center'>
                            <i className="fa-solid fa-id-card text-[#999] dark:text-adminTextWhite ransition-all duration-300"></i> 
                            <span>{dni && dni}</span>
                        </div>
                    }
                </div>
                <div className='flex flex-col gap-[6px] flex-1'>
                    <div className='flex justify-between'>
                        <span className='text-[#C5C5C5] dark:text-[#c5c5c58a] transition-all duration-300 text-[12px]'>
                            Costo delivery
                        </span>
                        <span className='text-adminTextDark  dark:text-[#C5C5C5] transition-all duration-300 text-[12px]'>
                            {priceDelivery === 0 ? "S/. 0.00" : `S/. ${priceDelivery.toFixed(2)}`}
                        </span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-adminTextPurple dark:text-skyBlueApp transition-all duration-300 text-[12px] font-semibold'>
                            Total
                        </span>
                        <span className='text-adminTextPurple dark:text-skyBlueApp transition-all duration-300 text-[12px] font-semibold'>
                            {totalOrder.toFixed(2)}
                        </span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AdminRequestCardBody
