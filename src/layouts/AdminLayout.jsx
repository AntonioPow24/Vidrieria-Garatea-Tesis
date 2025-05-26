
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/UserContext';
import { AdminProductsProvider } from '../context/ProductsContext/AdminProductsContext';
import AsideContainer from '../components/admin/AsideBar/AsideContainer';
import '../styles/admin/adminMode.css'
import { AdminUsersProvider } from '../context/AdminUsersContext/AdminUsersContext';
import { AdminRequestProvider } from '../context/AdminRequestContext/AdminRequestContext';
import AdminDashboardProvider from '../context/AdminDashboardContext/AdminDashboardContext';
import AdminDashboardStatsProvider from '../context/AdminDashboardContext/AdminDashboardStatsContext';
import { getUserRole } from '../utils/decodeToken';





const AdminLayout = () => {
  useAuth()
  const userRole = getUserRole()
  return (

    <AdminProductsProvider>

      <AdminUsersProvider>
        
        <AdminRequestProvider>

          <AdminDashboardProvider>

            <AdminDashboardStatsProvider>
              <div className='flex'>
                  <AsideContainer />
                  {userRole === 'ADMIN' ? 
                  <section className='bg-adminBgContrast dark:bg-[#404040] transition-all duration-300 flex-1'>
                      <Outlet />
                  </section>  : <Navigate to={'/'} />}
              </div>
            </AdminDashboardStatsProvider>
          </AdminDashboardProvider>

        </AdminRequestProvider>
        
      </AdminUsersProvider>


    </AdminProductsProvider>

  )
}

export default AdminLayout
