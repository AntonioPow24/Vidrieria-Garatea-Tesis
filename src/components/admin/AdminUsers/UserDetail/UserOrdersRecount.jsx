import React from 'react'
import { useAdminUsersContext } from '../../../../context/AdminUsersContext/AdminUsersContext'
import SmallLoader from '../../../shared/AdminLoaders/SmallLoader'

const UserOrdersRecount = ({ completedOrders, pendingOrders, cancelledOrders }) => {


  const { loadingSelectedUser } = useAdminUsersContext()

  const statusOrdersArray = [
    { id:1,
      label: 'pedidos Pendientes',
      recount:pendingOrders
    }, 
    { id:2,
      label: 'pedidos Cancelados',
      recount:cancelledOrders
    }, 
    { id:3,
      label: 'pedidos Completados',
      recount:completedOrders
    }, 
]

  return (
    <section className='flex flex-col gap-[22px]'>
        {
          statusOrdersArray?.map(({ id, label, recount }) => 
            <div 
              key={ id } 
              className='flex justify-center items-center py-[14px] rounded-[10px] bg-userDetailBg h-[58px]'
              >
                {
                  loadingSelectedUser ?
                  <SmallLoader message={ 'Cargando data' } />
                  :
                    <span className='text-text-white'>{ recount } { label }</span>
                }
            </div>

        )}
    </section>
  )
}

export default UserOrdersRecount
