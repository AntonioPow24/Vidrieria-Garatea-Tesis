import React, { memo, useMemo } from 'react'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext';

const AdminDashboardLastPending = ({data}) => {

    const { users } = useAdminUsersContext();
    
    const ordersList = useMemo(() => {
        return data.map(order => (
        <OrderCardDashboard
            key={order.id}
            {...order}
            user={users.find(u => u.id === order.userId) || {}}
        />
        ))
    }, [data, users])

    return (
        <section className='lastPendingGrid h-full gap-[20px]'>
        {ordersList}
        </section>
    )
}

export default memo(AdminDashboardLastPending)


const OrderCardDashboard = memo(({statusLabel, totalOrder,address, cityId,createdDate,user}) => {

    return (
        <article className='bg-adminBgWhite dark:bg-appBgBlack p-[10px] rounded-xl flex gap-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 justify-between'>
            <div className='flex flex-col justify-between gap-[5px]'>
                <div className='flex items-center gap-[8px] '>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img 
                            src={user?.profilePicture || 'https://i.pinimg.com/1200x/0b/9d/61/0b9d61e37b8aaa8258b4fd82881c6e0b.jpg'} 
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
})