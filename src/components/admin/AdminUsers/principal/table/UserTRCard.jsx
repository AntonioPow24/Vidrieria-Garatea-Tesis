import React from 'react'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext'
import { truncateId } from '../../../../../utils/truncateIdUser'

const UserTRCard = ({id, userName, lastName, email, roles}) => {

    const { selectUser, selectedUserTable } = useAdminUsersContext()
    const isSelected = selectedUserTable?.id === id

    const handleViewUserDetails = ( id ) => selectUser( id )
    
  return (
    <tr 
        className={` border-y-2  border-[#A3A3A34F] h-[80px] hover:bg-[#e4e4e4] dark:hover:bg-[#303030]  transition-all duration-300 ${isSelected ? 'bg-[#bdd6e2] dark:bg-[#303030]' : 'hover:bg-adminBgContrast dark:hover:bg-[#303030]'}`}
        
        onClick={ () => handleViewUserDetails( id ) }
    >
        <td className=''>
            <div className='flex justify-center items-center'>
                <div className='w-[58px] h-[58px] rounded-full overflow-hidden bg-red-500'>
                    <img 
                        src="https://i.pinimg.com/1200x/0b/9d/61/0b9d61e37b8aaa8258b4fd82881c6e0b.jpg" 
                        alt="Imagen de usuario"
                        className='w-full h-full object-cover' 
                    />
                </div>
            </div>
        </td>

        <td className=''>
            <div className='flex justify-center items-center'>
                <span className='text-center text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default fieldOnTableAdmin'>
                    { truncateId(id) }
                </span>
            </div>
        </td>

        <td className=''>
            <div className='flex justify-center items-center'>
                <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default fieldOnTableAdmin'>
                    { userName }
                </span>
            </div>
        </td>

        <td className=''>
            <div className='flex justify-center items-center'>
                <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default fieldOnTableAdmin'>
                    { lastName }
                </span>
            </div>
        </td>

        <td className=''>
            <div className='flex justify-center items-center'>
                <span className='text-center font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default fieldOnTableAdmin'>
                    { email }
                </span>
            </div>
        </td>

        <td className=''>
            <div className='flex justify-center items-center'>
                <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default fieldOnTableAdmin '>
                    { (roles[0]).toLowerCase() }
                </span>
            </div>
        </td>     
    </tr>
  )
}

export default UserTRCard
