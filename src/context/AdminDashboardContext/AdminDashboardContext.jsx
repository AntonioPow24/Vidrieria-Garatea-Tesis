import { createContext, useContext, useEffect, useState } from "react";

export const AdminDashboardContext = createContext();

const AdminDashboardProvider = ({ children }) => {

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear(); 

    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [stats, setStats] = useState({
        totalSalesByMonth: null,
        quantitySalesByMonth: null,
        highestSaleByMonth: null,
        newUsersByMotnh: null,
    });


  return (
    <AdminDashboardContext.Provider 
        value={{
            selectedMonth, 
            setSelectedMonth, 
            selectedYear, 
            setSelectedYear, 
            currentYear
        }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboardProvider;

// Hook para usar el AdminDashboardContext
export const useAdminDashboardContext = () => useContext(AdminDashboardContext);