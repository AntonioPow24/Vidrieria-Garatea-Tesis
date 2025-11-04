import React from 'react'

import DataField from './DataField'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext'
import SmallLoader from '../../../../shared/AdminLoaders/SmallLoader'
import { truncateId } from '../../../../../utils/truncateIdUser'
import DataImage from './DataImage'


const UserPersonalData = ({ userName, lastName, email, id, createdDate, totalOrders }) => {

     const { loadingSelectedUser } = useAdminUsersContext()

  return (
    <section className='flex flex-col gap-[15px] py-[20px] px-[12px] rounded-[10px] bg-userDetailBg h-[174px] justify-center'>
        {loadingSelectedUser ?
            <SmallLoader message={ 'Cargando data' } />
            :
            <>
                <div className='flex  gap-[12px]'>
                    <DataImage />

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
