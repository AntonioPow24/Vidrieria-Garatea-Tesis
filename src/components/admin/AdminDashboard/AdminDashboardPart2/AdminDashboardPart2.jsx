import React from 'react'
import SemiDonutStat from './AdminDashboardPercetage/SemiDonutStat'
import { useAdminDashboardStatsContext } from '../../../../context/AdminDashboardContext/AdminDashboardStatsContext'
import SmallLoader from '../../../shared/AdminLoaders/SmallLoader'

const AdminDashboardPart2 = () => {

    const { 
          loading,
          error,
          cardStats,
          chartData,
          tableData,
          topStats, 
    } = useAdminDashboardStatsContext()

  return (
    <section className='flex flex-col gap-[30px] justify-between w-[320px] bg-red-300'>
      <div>
        {
          loading ? <SmallLoader message={"Cargando"} /> :
          <SemiDonutStat data={chartData.relationOrderForPercentage} />
        }
      </div>
    </section>
  )
}

export default AdminDashboardPart2
