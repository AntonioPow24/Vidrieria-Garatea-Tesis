import React, { useEffect, useRef, useState } from 'react'
import useDashboardFilterDate from '../../../../../hooks/AdminDashboardHooks/useDashboardFilterDate';
import OrderListIcon from '../../../../icons/OrderListIcon';
import { MONTHS } from '../../../../../data/adminData';

const AdminDashboardFilterMonth = () => {
const { selectedMonth, selectMonth } = useDashboardFilterDate();
    const [isFilterMonthsOpen, setIsFilterMonthsOpen] = useState(false)
    const filterRef = useRef(null);

    const showMonthLabel = (monthId) => {
        if(monthId || monthId === 0){
            return MONTHS.find(month => month.id === selectedMonth).full;
        }
    }

    const handleOpenFilter = () => {
        setIsFilterMonthsOpen(!isFilterMonthsOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterMonthsOpen(false);
            }
        };
        if (isFilterMonthsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isFilterMonthsOpen]);

  return (
    <div 
        className='1780:min-w-[180px] min-w-[150px]  bg-adminBgWhite dark:bg-appBgBlack rounded-[6px]  flex justify-center items-center transition-all duration-300 relative z-[20] py-1'
        ref={filterRef}
    >
        <div 
            className='flex items-center justify-between w-full cursor-pointer px-[10px]'
            onClick={handleOpenFilter}
        >
            <span className='text-[16px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300'>
                {showMonthLabel(selectedMonth)}
            </span>
            <OrderListIcon />
        </div>
        {
            isFilterMonthsOpen &&
            <div 
                className='grid grid-cols-3 gap-[10px] p-[10px] absolute top-full bg-adminBgWhite dark:bg-appBgBlack rounded-[6px] mt-[6px]'
            >
                {
                MONTHS?.map(({id, short, full}) => (
                    <div 
                    key={id} 
                    className={`flex justify-center items-center rounded-[4px] cursor-pointer px-[8px] py-[4px] ${selectedMonth === id ? "bg-dashboardPurpleBg text-text-white" : "bg-[#EBEBEB] dark:bg-adminTextDark text-adminTextDark dark:text-adminTextWhite"}`}
                    onClick={() => {
                        selectMonth({ target: { value: id } })
                                    setIsFilterMonthsOpen(false)
                        }}
                    >
                        {short}
                    </div>
                ))  
                }
            </div>
        }
    </div>
  )
}

export default AdminDashboardFilterMonth
