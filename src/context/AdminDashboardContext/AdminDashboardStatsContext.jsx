import { createContext, useContext, useEffect, useState } from "react";
import { useAdminDashboardContext } from "./AdminDashboardContext";
import axios from "axios";
import { getApiUrl } from "../../utils/getApiURL";
import { useAdminProductsContext } from "../ProductsContext/AdminProductsContext";

export const AdminDashboardStatsContext = createContext();

const AdminDashboardStatsProvider = ({ children }) => {
    const {selectedMonth, selectedYear} = useAdminDashboardContext();
    const {products} = useAdminProductsContext()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [cardStats, setCardStats] = useState({
        totalSalesByMonth: null,
        quantitySalesByMonth: null,
        highestSaleByMonth: null,
        newUsersByMotnh: null,
    });

    const [chartData, setChartData] = useState({
        allMonthsSales: [],
        relationOrderForPercentage: null,
    })

    const [tableData, setTableData] = useState({
        productsSoldByMonth: [],
    })

    const [topStats, setTopStats] = useState({
        topProductByMonth: null,
        topUserByMonth: null,
    })



    const token = localStorage.getItem("authToken");
    const apiUrl = getApiUrl();

    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const [lastPendingOrders, setLastPendingOrders] = useState([]);

  useEffect(() => {
    const fetchLastPending = async () => {
      try {
        const res = await axios.get(`${apiUrl}/report/topOrders`, axiosConfig);
        setLastPendingOrders(res.data.result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLastPending();
  }, []);


  useEffect(() => {
      const fetchAllStats = async () => {
          
        setLoading(true);
        setError(null);
        try {
          const month = selectedMonth + 1;
          const year = selectedYear;
          const [
                newUsersByMotnhRes,
                cardStatsRes,
                relationOrderForPercentageRes,
                productsSoldByMonthRes,
                topProductByMonthRes,
                allMonthsSalesRes,
                topUserByMonthRes,
            ] = await Promise.all([
                axios.get(`${apiUrl}/report/totalUsers`, {
                    params: { month, year },
                    ...axiosConfig,
                }),
                axios.get(`${apiUrl}/report/topSalesByMonth`, {
                    params: { month, year },
                    ...axiosConfig,
                }),
                axios.get(`${apiUrl}/report/totalOrdersOnCompletedOrders`, {
                    params: { month, year },
                    ...axiosConfig,
                }),
                axios.get(`${apiUrl}/report/soldProducts`, {
                    params: { month, year },
                    ...axiosConfig,
                }),
                axios.get(`${apiUrl}/report/mostSoldProduct`, {
                    params: { month, year },
                    ...axiosConfig,
                }),
                axios.get(`${apiUrl}/report/salesByMonth`, {
                    params: { year },
                    ...axiosConfig,
                }),
                axios.get(`${apiUrl}/report/userHighestPurchase`, axiosConfig),
            ])
            

            setCardStats({
              totalSalesByMonth: cardStatsRes.data.totalSales,
              quantitySalesByMonth: cardStatsRes.data.totalOrdersCurrentMonth,
              highestSaleByMonth: cardStatsRes.data.maxOrderSale,
              newUsersByMotnh: newUsersByMotnhRes.data.result,
            })

            setChartData({
              allMonthsSales: allMonthsSalesRes.data,
              relationOrderForPercentage: relationOrderForPercentageRes.data,
            })

            setTableData({
              productsSoldByMonth: productsSoldByMonthRes.data,
            })

            setTopStats({
              topProductByMonth: topProductByMonthRes.data,
              topUserByMonth: topUserByMonthRes.data,
            })

        } catch (err) {
            console.log(err);
            setError("Error al cargar los datos del dashboard");
        } finally {

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      }

        fetchAllStats();
        
  }, [selectedMonth, selectedYear, products]);

  return (
    <AdminDashboardStatsContext.Provider 
        value={{ 
          loading, 
          error,
          cardStats,
          chartData,
          tableData,
          topStats,
          lastPendingOrders, 
        }}
    >
      {children}
    </AdminDashboardStatsContext.Provider>
  );
};

export default AdminDashboardStatsProvider;

export const useAdminDashboardStatsContext = () => useContext(AdminDashboardStatsContext);