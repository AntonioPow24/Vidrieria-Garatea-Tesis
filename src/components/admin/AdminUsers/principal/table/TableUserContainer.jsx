import React from 'react'
import TableHead from '../../../../shared/adminTable/TableHead'
import TableBody from '../../../../shared/adminTable/TableBody'
import { usersHeadFields } from '../../../../../data/tHeadData'

const TableUserContainer = ({filteredUsers}) => {
  return (
    <section className='w-full dark:bg-appBgBlack bg-adminBgWhite z-10 transition-all duration-300 flex flex-col rounded-[8px] overflow-hidden overflow-y-auto TbodyScrollingY'>

      <table className='w-full table-fixed'>
          <TableHead headFieldsData={ usersHeadFields } />

          <TableBody tableData={ filteredUsers } tableName={ 'userTable' } />
      </table>
    </section>
  )
}

export default TableUserContainer
