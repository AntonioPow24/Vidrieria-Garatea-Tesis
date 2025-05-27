import React from 'react'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext';

const AdminDashboardLastPending = ({data}) => {

    const { users } = useAdminUsersContext();
    console.log(data);
    
  return (
    <section className='lastPendingGrid h-full gap-[20px]'>
        {
            data.map((order) => (
                <OrderCardDashboard 
                    key={order.id} 
                    {...order}
                    user={
                        users.find(user => user.id === order.userId) || {}
                    }
                />
            ))
        }
    </section>
  )
}

export default AdminDashboardLastPending


const OrderCardDashboard = ({statusLabel, totalOrder,address, cityId,createdDate,user}) => {

    return (
        <article className='bg-adminBgWhite dark:bg-appBgBlack p-[10px] rounded-xl flex gap-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 justify-between'>
            <div className='flex flex-col justify-between gap-[5px]'>
                <div className='flex items-center gap-[8px] '>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img 
                            src={user?.profilePicture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfnsDVJ35de9T-d_OWdAd4rPV9sKpWWblsw&s'} 
                            alt=""
                            className='object-cover w-full h-full' 
                        />
                    </div>

                    <div className='flex flex-col justify-between gap-[2px] '>
                        <span className='text-[16px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 capitalize'>
                            {user?.userName || 'Usuario Anónimo'}
                        </span>

                        <span>
                            <span className='text-[12px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300'>
                                {address && address || 'Sin dirección'}
                            </span>
                        </span>
                    </div>
                </div>

                <div>
                    <span className='text-[14px] text-adminTextPending transition-all duration-300 capitalize'>
                        {statusLabel.toLowerCase()}
                    </span>
                </div>
            </div>

            <div className='flex flex-col justify-between'>
                <div className='flex items-center justify-end'>
                    <span className='text-[14px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300'>
                        {cityId === 0 ? "Recojo" : "Domicilio"}
                    </span>
                </div>

                <div>
                    <span className='text-[16px] text-adminTextPurple transition-all duration-300'>
                        S/. {totalOrder.toFixed(2)}
                    </span>
                </div>
            </div>
        </article>
    )
}