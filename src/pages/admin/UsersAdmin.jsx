import React from 'react'
import HeaderBar from '../../components/shared/adminSimple/HeaderBar'
import SearchContainer from '../../components/admin/AdminUsers/principal/searcher/SearchContainer'
import useSearchUser from '../../hooks/adminSearch/useSearchUser'
import TableUserContainer from '../../components/admin/AdminUsers/principal/table/TableUserContainer'
import UserDetailContainer from '../../components/admin/AdminUsers/UserDetail/UserDetailContainer'


const UsersAdmin = () => {

  const { query, handleSearch, filteredUsers } = useSearchUser()

  return (
    <section className='flex h-[100dvh] gap-[22px]'>

        <section className='flex-1 flex flex-col'>
          <HeaderBar titleSection={ 'Usuarios' }  quantity={ 20 }/>

          <main className='flex flex-col gap-[22px] pl-[22px] py-[22px] flex-1 overflow-hidden'>
            <SearchContainer query={ query } handleSearch={ handleSearch } />

            <TableUserContainer filteredUsers={ filteredUsers } />
          </main>
        </section>

        <section className='flex-1 userDetailContainer py-[30px] px-[18px] max-w-[340px] 1570:max-w-[290px]'>
          <UserDetailContainer />
        </section>

    </section>
  )
}

export default UsersAdmin
