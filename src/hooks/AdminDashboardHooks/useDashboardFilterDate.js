import React, { useState } from 'react'
import { useAdminDashboardContext } from '../../context/AdminDashboardContext/AdminDashboardContext';



const useDashboardFilterDate = () => {

    const {
        selectedMonth, 
        setSelectedMonth, 
        selectedYear, 
        setSelectedYear,
        currentYear,
    } = useAdminDashboardContext();

    const years = [];
    for (let y = currentYear - 5; y <= currentYear + 1; y++) {
        years.push(y);
    }

    const selectMonth = (e) =>{
        const month = e.target.value;
        setSelectedMonth(Number(month));
    }

    const selectYear = (e) =>{
        const year = e.target.value;
        setSelectedYear(Number(year));
    }

    return {
        selectedMonth,
        selectedYear,
        years,
        selectMonth,
        selectYear
    }
}

export default useDashboardFilterDate
