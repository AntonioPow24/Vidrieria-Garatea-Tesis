import React from 'react'
import TableHead from '../../../../shared/adminTable/TableHead'
import TableBody from '../../../../shared/adminTable/TableBody'
import { soldProductsDashboardHeadFields } from '../../../../../data/tHeadData'

const AdminDashboardTable = ({tableBodyData}) => {
  return (
    <div className='rounded-xl bg-adminBgWhite dark:bg-appBgBlack p-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col justify-center items-center'>

      <div className='flex justify-between items-center w-full'>
        <h2 className='text-[18px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 font-semibold mb-[12px]'>
          Productos vendidos este mes
        </h2>
      </div>

      <div className='overflow-y-auto TBodyRequestProducts h-[280px]'>
        <table className='w-full table-fixed'>
          <TableHead headFieldsData={soldProductsDashboardHeadFields} />
          <TableBody 
            tableName={'dashboardTableProducts'} 
            tableData={tableBodyData} 
          />
        </table>
      </div>
    </div>
  )
}

export default AdminDashboardTable
