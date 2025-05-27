import React, { useEffect, useRef, useState } from 'react'
import { YEARS } from '../../../../../data/adminData';
import useDashboardFilterDate from '../../../../../hooks/AdminDashboardHooks/useDashboardFilterDate';
import OrderListIcon from '../../../../icons/OrderListIcon';

const AdminDashboardFilterYear = () => {
    const { selectedYear, selectYear } = useDashboardFilterDate()
    const [isFilterYearsOpen, setIsFilterYearsOpen] = useState(false)
    const filterRef = useRef(null)

    const showYearLabel = (yearId) => {
        return YEARS.find(year => year.id === yearId)?.full
    }

    const handleOpenFilter = () => {
        setIsFilterYearsOpen(!isFilterYearsOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterYearsOpen(false)
            }
        }
        if (isFilterYearsOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isFilterYearsOpen])

    return (
        <div
            className='1780:w-[140px] w-[120px] bg-adminBgWhite dark:bg-appBgBlack rounded-[6px] flex justify-center items-center transition-all duration-300 relative z-[20]'
            ref={filterRef}
        >
            <div
                className='flex items-center justify-between w-full cursor-pointer px-[10px]'
                onClick={handleOpenFilter}
            >
                <span className='text-[16px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300'>
                    {showYearLabel(selectedYear)}
                </span>
                <OrderListIcon />
            </div>
            {
                isFilterYearsOpen &&
                <div
                    className='grid grid-cols-2 gap-[10px] p-[10px] absolute top-full bg-adminBgWhite dark:bg-appBgBlack rounded-[6px] mt-[6px]'
                >
                {
                YEARS.map(({ id, full }) => (
                    <div
                        key={id}
                        className={`flex justify-center items-center rounded-[4px] cursor-pointer px-[8px] py-[4px] ${selectedYear === id ? "bg-dashboardPurpleBg text-text-white" : "bg-[#EBEBEB] dark:bg-adminTextDark text-adminTextDark dark:text-adminTextWhite"}`}
                        onClick={() => {
                            selectYear({ target: { value: id } })
                            setIsFilterYearsOpen(false)
                        }}
                    >
                        {full}
                    </div>
                    ))
                }
                </div>
            }
        </div>
    )
}

export default AdminDashboardFilterYear
