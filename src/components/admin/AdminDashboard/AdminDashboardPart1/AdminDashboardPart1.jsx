import React from 'react'
import AdminDashboardBanner from './AdminDashboardBanner/AdminDashboardBanner'
import AdminDashboardStat from './AdminDashboardStat/AdminDashboardStat'
import AdminDashboardDiagram from './AdminDashboardDiagram/AdminDashboardDiagram'
import AdminDashboardTop from './AdminDashboardTop/AdminDashboardTop'
import AdminDashboardTable from './AdminDashboardTable/AdminDashboardTable'
import AdminDashboardFilterDateContainer from './AdminDashboardFilterDate/AdminDashboardFilterDateContainer'
import { useAdminDashboardStatsContext } from '../../../../context/AdminDashboardContext/AdminDashboardStatsContext'
import AdminDashboardSkeleton from '../AdminDashboardSkeleton'



const AdminDashboardPart1 = () => {

    const { 
        loading,
        error,
        cardStats,
        chartData,
        tableData,
        topStats, 
    } = useAdminDashboardStatsContext()

    console.log("cardStats", cardStats);
    

    const formatMoney = (number) => {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(number);
    }   




  return (
      <section className="flex flex-col gap-[30px] justify-between flex-1">
        <div className='h-[220px] rounded-xl overflow-hidden'>
            <AdminDashboardBanner />
        </div>

        <section className='flex flex-1 gap-[30px] justify-between'>
            <div className='flex flex-col gap-[30px] justify-between'>
                <div>
                    <AdminDashboardFilterDateContainer />
                </div>

                <AdminDashboardStat 
                    title={'Venta total del mes'}
                    statNumber={formatMoney(cardStats?.totalSalesByMonth)}
                    icon={'fa-money-bill-1'}
                />
                
                <AdminDashboardStat 
                    title={'Ventas realizadas'}
                    statNumber={`${cardStats?.quantitySalesByMonth} Ventas `}
                    icon={'fa-boxes'}
                />

                <AdminDashboardStat 
                    title={'Mayor venta del mes'}
                    statNumber={formatMoney(cardStats?.highestSaleByMonth)}
                    icon={'fa-chart-line'}
                />
                
                <AdminDashboardStat 
                    title={'Nuevos usuarios'}
                    statNumber={`${cardStats?.newUsersByMotnh} Usuarios`}
                    icon={'fa-user-plus'}
                />

                <AdminDashboardStat 
                    title={'Usuario con mayor compra'}
                    statNumber={
                        <div className=' flex flex-col'>
                            <span className='text-[18px] capitalize'>
                                {`${topStats?.topUserByMonth?.userName} ${topStats?.topUserByMonth?.lastName}`}
                            </span>

                            <span className='text-[18px]'>
                                {topStats?.topUserByMonth?.email}
                            </span>
                        </div>
                    }
                    icon={'fa-user-tie'}
                />
            </div>

            <div className='flex flex-1 flex-col gap-[30px] justify-between'>
                <div className='flex flex-1 gap-[30px] justify-between'>
                    <div>
                        <AdminDashboardTable />
                    </div>

                    <div>
                        <AdminDashboardTop />
                    </div>
                </div>
                <div className='flex-1'>
                    <AdminDashboardDiagram />
                </div>

            </div>
        </section>
      </section>
  )
}

export default AdminDashboardPart1
