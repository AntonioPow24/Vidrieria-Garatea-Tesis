import React from 'react'
import UserPersonalData from './PersonalData/UserPersonalData'
import UserOrdersRecount from './UserOrdersRecount'
import UserExtraData from './UserExtraData'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext'

const UserDetailContainer = () => {

    const { selectedUserTable } = useAdminUsersContext()

  return (
    <section className='flex flex-col gap-[22px] '>
        <UserPersonalData 
            { ...selectedUserTable }
        />
        <UserOrdersRecount 
            { ...selectedUserTable }
        />
        <UserExtraData 
            { ...selectedUserTable }
        />
    </section>
  )
}

export default UserDetailContainer
