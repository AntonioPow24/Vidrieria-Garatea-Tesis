import React, { useEffect, useRef, useState } from 'react'
import { useAdminRequestContext } from '../../../../context/AdminRequestContext/AdminRequestContext';
import OrderListIcon from '../../../icons/OrderListIcon';
import { MONTHS } from '../../../../data/adminData';

const AdminMonthFilter = () => {

    const { selectedMonth, setSelectedMonth } = useAdminRequestContext();
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

    const handleSelectedMonth = (monthId) => {
        if(monthId === selectedMonth){
            setSelectedMonth(null)
        }else{
            setSelectedMonth(monthId)
        }
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
        className='w-[170px]  bg-adminBgWhite dark:bg-appBgBlack rounded-[6px]  flex justify-center items-center transition-all duration-300 relative'
        ref={filterRef}
    >
        <div 
            className='flex items-center justify-between w-full cursor-pointer px-[10px]'
            onClick={handleOpenFilter}
        >
            <span className='text-[16px] text-adminTextDark dark:text-adminTextWhite'>
                {showMonthLabel(selectedMonth) || "Todos los meses" }
            </span>
            <OrderListIcon />
        </div>
        {
            isFilterMonthsOpen &&
            <div 
                className='grid grid-cols-3 gap-[10px] p-[10px] absolute top-full bg-adminBgWhite dark:bg-appBgBlack rounded-[6px] mt-[6px]'
            >
                {
                MONTHS.map(({id, short, full}) => (
                    <div 
                    key={id} 
                    className={`flex justify-center items-center rounded-[4px] cursor-pointer px-[8px] py-[4px] ${selectedMonth === id ? "bg-dashboardPurpleBg text-text-white" : "bg-[#EBEBEB] dark:bg-adminTextDark text-adminTextDark dark:text-adminTextWhite"}`}
                    onClick={() => handleSelectedMonth(id)}
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

export default AdminMonthFilter
