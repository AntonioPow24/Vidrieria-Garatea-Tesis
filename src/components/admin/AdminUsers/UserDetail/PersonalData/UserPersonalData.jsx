import React from 'react'

import DataField from './DataField'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext'
import SmallLoader from '../../../../shared/AdminLoaders/SmallLoader'
import { truncateId } from '../../../../../utils/truncateIdUser'


const UserPersonalData = ({ userName, lastName, email, id, createdDate, totalOrders }) => {

     const { loadingSelectedUser } = useAdminUsersContext()

  return (
    <section className='flex flex-col gap-[15px] py-[20px] px-[12px] rounded-[10px] bg-userDetailBg h-[174px] justify-center'>
        {loadingSelectedUser ?
            <SmallLoader message={ 'Cargando data' } />
            :
            <>
                <div className='flex  gap-[12px]'>
                    <div className='w-[77px] h-[77px] rounded-full overflow-hidden bg-red-500 1570:w-[60px] 1570:h-[60px]'>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfnsDVJ35de9T-d_OWdAd4rPV9sKpWWblsw&s" 
                            alt="Imagen de usuario"
                            className='w-full h-full object-cover' 
                        />
                    </div>

                    <div className='flex flex-col justify-between flex-1'>
                        <DataField 
                            label={ 'Total pedidos' }
                            field={ `${totalOrders} pedidos` }
                        />
                        <DataField 
                            label={ 'Fecha registro' }
                            field={ createdDate }
                        />
                        <DataField 
                            label={ 'ID de usuario' }
                            field={ truncateId(id) }
                        />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-start items-center'>
                        <span className='text-text-white'>{ userName } { lastName }</span>
                    </div>
                    <div className='flex justify-start items-center'>
                        <span className='text-[#54BFE1B2] text-[12px] '>{ email }</span>
                    </div>
                </div>
            </>

        }
    </section>
  )
}

export default UserPersonalData
