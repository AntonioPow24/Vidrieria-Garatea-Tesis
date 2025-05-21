import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getApiUrl } from '../../utils/getApiURL';


const AdminRequestContext = createContext();

export const AdminRequestProvider = ({ children }) => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [stats, setStats] = useState(null);
    const [loadingStats, setLoadingStats] = useState(false); 

    const [activeStatus, setActiveStatus] = useState(0);
    const [activeLocation, setActiveLocation] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [orderType, setOrderType] = useState('recientes');

    const fetchRequests = async () => {
        const token = localStorage.getItem('authToken');
        const apiUrl = getApiUrl();

        setLoading(true);
        setError(null);
        try {
        const response = await axios.get(`${apiUrl}/order/list`, 
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        setRequests(response.data);
        
        } catch (err) {
        console.log(err);
        
        setError('Error al obtener los pedidos');
        } finally {
        setLoading(false);
        }
    };

    const fetchStats = async () => {
        const token = localStorage.getItem('authToken');
        const apiUrl = getApiUrl();

        setLoadingStats(true);
        try {
            const response = await axios.get(`${apiUrl}/report/totalOrders`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setStats(response.data);
        } catch (err) {
            setError('Error al obtener las estadísticas');
        } finally {
            setLoadingStats(false);
        }
    };



    useEffect(() => {
        fetchRequests();
    }, []);

    useEffect(() => {
        fetchStats();
    }, [requests]);

    return (
        <AdminRequestContext.Provider
        value={{
            requests,
            setRequests,
            loading,
            error,
            stats,
            loadingStats,
            fetchRequests,
            fetchStats,
            activeStatus, setActiveStatus,
            activeLocation, setActiveLocation,
            searchQuery, setSearchQuery,
            selectedMonth, setSelectedMonth,
            orderType, setOrderType,
        }}
        >
        {children}
        </AdminRequestContext.Provider>
    );
};

export const useAdminRequestContext = () => useContext(AdminRequestContext);