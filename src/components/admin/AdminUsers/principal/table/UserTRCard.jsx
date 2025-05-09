import React from 'react'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext'

const UserTRCard = ({id, userName, lastName, email, ROLES}) => {

    const { selectUser, selectedUserTable } = useAdminUsersContext()
    const isSelected = selectedUserTable?.id === id

    const handleViewUserDetails = ( id ) => selectUser( id )

  return (
    <tr 
        className={` border-y-2  border-[#A3A3A34F] h-[80px] hover:bg-[#e4e4e4] dark:hover:bg-[#303030]  transition-all duration-300 ${isSelected ? 'bg-[#bdd6e2] dark:bg-[#303030]' : 'hover:bg-adminBgContrast dark:hover:bg-[#303030]'}`}
        
        onClick={ () => handleViewUserDetails( id ) }
    >
        <td className='w-[10%]'>
            <div className='flex justify-center items-center'>
                <div className='w-[58px] h-[58px] rounded-full overflow-hidden bg-red-500'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfnsDVJ35de9T-d_OWdAd4rPV9sKpWWblsw&s" 
                        alt="Imagen de usuario"
                        className='w-full h-full object-cover' 
                    />
                </div>
            </div>
        </td>

        <td className='w-[5%]'>
            <div className='flex justify-center items-center'>
                <span className='text-center text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>
                    { id }
                </span>
            </div>
        </td>

        <td className='w-[22%]'>
            <div className='flex justify-center items-center'>
                <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>
                    { userName }
                </span>
            </div>
        </td>

        <td className='w-[22%]'>
            <div className='flex justify-center items-center'>
                <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>
                    { lastName }
                </span>
            </div>
        </td>

        <td className='w-[31%]'>
            <div className='flex justify-center items-center'>
                <span className='text-center font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>
                    { email }
                </span>
            </div>
        </td>

        <td className='w-[10%]'>
            <div className='flex justify-center items-center'>
                <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>
                    { ROLES[0] }
                </span>
            </div>
        </td>     
    </tr>
  )
}

export default UserTRCard
