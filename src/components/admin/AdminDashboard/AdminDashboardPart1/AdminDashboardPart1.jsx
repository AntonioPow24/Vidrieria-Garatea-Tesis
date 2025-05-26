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
    

    const formatMoney = (number) => {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(number);
    }   




  return (
      <section className="flex flex-col gap-[20px] justify-between flex-1 1520:overflow-y-auto DashboardScrolling">
        <div className='min-h-[158px] max-h-[158px]  rounded-xl overflow-hidden'>
            <AdminDashboardBanner />
        </div>

        <section className='flex flex-1 gap-[20px] justify-between 1780:flex-col'>
            <div className='flex flex-col gap-[20px] justify-between 1780:'>
                <div>
                    <AdminDashboardFilterDateContainer />
                </div>
                <div className='flex flex-col gap-[20px] 1780:flex-row flex-wrap flex-1 justify-between'>
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
                            <div className=' flex flex-col 1710:flex-row 1710:gap-[10px]'>
                                <span className='text-[18px] capitalize 1710:text-[16px]'>
                                    {`${topStats?.topUserByMonth?.userName} ${topStats?.topUserByMonth?.lastName}`}
                                </span>

                                <span className='text-[18px] 1710:text-[16px]'>
                                    {topStats?.topUserByMonth?.email}
                                </span>
                            </div>
                        }
                        icon={'fa-user-tie'}
                    />
                </div>
            </div>

            <div className='flex flex-1 flex-col gap-[20px] justify-between'>
                <div className='flex flex-1 gap-[20px] justify-between 1442:flex-col'>
                    <div className='flex-1'>
                        <AdminDashboardTable tableBodyData={tableData.productsSoldByMonth}/>
                    </div>

                    <div>
                        <AdminDashboardTop 
                            {...(topStats.topProductByMonth)}
                        />
                    </div>
                </div>
                <div className='flex-1'>
                    <AdminDashboardDiagram dataChart={chartData.allMonthsSales}/>
                </div>

            </div>
        </section>
      </section>
  )
}

export default AdminDashboardPart1
