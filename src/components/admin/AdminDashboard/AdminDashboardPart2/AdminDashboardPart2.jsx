import React from 'react'
import SemiDonutStat from './AdminDashboardPercetage/SemiDonutStat'
import { useAdminDashboardStatsContext } from '../../../../context/AdminDashboardContext/AdminDashboardStatsContext'
import SmallLoader from '../../../shared/AdminLoaders/SmallLoader'
import AdminDashboardLastPending from './AdminDashboardRequestCard/AdminDashboardLastPending'

const AdminDashboardPart2 = () => {

    const { 
          loading,
          error,
          cardStats,
          chartData,
          tableData,
          topStats,
          lastPendingOrders, 
    } = useAdminDashboardStatsContext()

    const emptyDonutData = {
      completionPercentage: 0,
      completedOrders: 0,
      totalOrdersCurrentMonth: 0,
    }

  return (
    <section className='flex flex-col gap-[30px] justify-between w-[320px] 1300:flex-row 1300:w-full'>
      <div className=''>
        <SemiDonutStat
          data={loading ? emptyDonutData : chartData.relationOrderForPercentage}
        />
      </div>

      <div className='flex-1 flex flex-col gap-2'>

        <div className='flex'>
          <h4 className='text-adminTextDark dark:text-text-white transition-all duration-300'>Últimos pedidos</h4>
        </div>

        <div className='flex-1'>
          <AdminDashboardLastPending 
            data={lastPendingOrders}
          />
        </div>
      </div>
    </section>
  )
}

export default AdminDashboardPart2
