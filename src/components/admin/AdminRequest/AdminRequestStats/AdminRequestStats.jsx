import React, { useState } from 'react'
import AdminStat from './AdminStat'
import { useAdminRequestContext } from '../../../../context/AdminRequestContext/AdminRequestContext'

const CHIMBOTE_ID = 1;
const NVO_CHIMBOTE_ID = 2;
const PICKUP_ID = 0;
const PENDING_ID = 0;
const COMPLETED_ID = 1;
const CANCELLED_ID = 2;

const AdminRequestStats = () => {

    const {
        stats, 
        activeStatus, 
        setActiveStatus, 
        activeLocation, 
        setActiveLocation
    } = useAdminRequestContext()

    const {
        totalOrders = 0, 
        totalCompletedOrders = 0, 
        totalPendingOrders = 0, 
        totalCancelledOrders = 0,
        ordersByCity = [], 
        totalPickInOrders = 0,
    } = stats || {};

    const [shouldAnimateStats, setShouldAnimateStats] = useState(true); 

  return (
    <div className='flex justify-between gap-[30px]'>
        <div className='flex justify-between flex-1 gap-[30px]'>     
            <div className='px-[20px] py-[20px] bg-adminBgWhite rounded-[12px] flex justify-between gap-[1.5rem] dark:bg-appBgBlack transition-all duration-300 flex-1'>
                <AdminStat 
                    statValueColor={"green"}
                    statTitle={"Completados"}
                    statValue={totalCompletedOrders}
                    shouldAnimate={shouldAnimateStats}
                    onClick={() => {
                        setActiveStatus(
                            activeStatus === COMPLETED_ID ? null : 
                            COMPLETED_ID
                        )
                    }}
                    active={activeStatus === COMPLETED_ID}
                />

                <AdminStat 
                    statValueColor={"yellow"}
                    statTitle={"Pendientes"}
                    statValue={totalPendingOrders}
                    shouldAnimate={shouldAnimateStats}
                    onClick={() => {
                        setActiveStatus(
                            activeStatus === PENDING_ID ? null : 
                            PENDING_ID
                        )
                    }}
                    active={activeStatus === PENDING_ID}
                />

                <AdminStat 
                    statValueColor={"red"}
                    statTitle={"Cancelados"}
                    statValue={totalCancelledOrders}
                    shouldAnimate={shouldAnimateStats}
                    onClick={() => {
                        setActiveStatus(
                            activeStatus === CANCELLED_ID ? null : 
                            CANCELLED_ID
                        )
                    }}
                    active={activeStatus === CANCELLED_ID}
                />
            </div>

            <div className='px-[20px] py-[20px] bg-adminBgWhite rounded-[12px] flex justify-between gap-[1.5rem] dark:bg-appBgBlack transition-all duration-300 flex-1'>

                <AdminStat 
                    statValueColor={"blue"}
                    statTitle={"Nvo. Chimbote"}
                    statValue={ordersByCity.length? ordersByCity[0].totalCityOrders : 0}
                    shouldAnimate={shouldAnimateStats}
                    onClick={() => {
                        setActiveLocation(
                            activeLocation === NVO_CHIMBOTE_ID ? null : 
                            NVO_CHIMBOTE_ID
                        )
                    }}
                    active={activeLocation === NVO_CHIMBOTE_ID}
                />

                <AdminStat 
                    statValueColor={"brown"}
                    statTitle={"Chimbote"}
                    statValue={ordersByCity.length? ordersByCity[1].totalCityOrders : 0}
                    shouldAnimate={shouldAnimateStats}
                    onClick={() => {
                        setActiveLocation(
                            activeLocation === CHIMBOTE_ID ? null :
                            CHIMBOTE_ID
                        )
                    }}
                    active={activeLocation === CHIMBOTE_ID}
                />

                <AdminStat 
                    statValueColor={"purple"}
                    statTitle={"Recojo en tienda"}
                    statValue={totalPickInOrders}
                    shouldAnimate={shouldAnimateStats}
                    onClick={() => {
                        setActiveLocation(
                            activeLocation === PICKUP_ID ? null : 
                            PICKUP_ID
                        )
                    }}
                    active={activeLocation === PICKUP_ID}
                />
            </div>
        </div>

        <div className='flex justify-between items-center px-[20px] py-[20px] bg-dashboardPurpleBg rounded-[12px] transition-all duration-300'>
            <AdminStat
                statValueColor={"white"}
                statTitle={"Total pedidos"}
                mainStat={true}
                statValue={totalOrders}
                shouldAnimate={shouldAnimateStats}
            />
        </div>

    </div>
  )
}

export default AdminRequestStats
