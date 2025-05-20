
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/UserContext';
import { AdminProductsProvider } from '../context/ProductsContext/AdminProductsContext';
import AsideContainer from '../components/admin/AsideBar/AsideContainer';
import '../styles/admin/adminMode.css'
import { AdminUsersProvider } from '../context/AdminUsersContext/AdminUsersContext';
import { AdminRequestProvider } from '../context/AdminRequestContext/AdminRequestContext';




const AdminLayout = () => {

    const { user } = useAuth();

  return (

    <AdminProductsProvider>

      <AdminUsersProvider>
        
        <AdminRequestProvider>
          <div className='flex'>
              <AsideContainer />
              {user && user.roles[0] === 'ADMIN' ? 
              <section className='bg-adminBgContrast dark:bg-[#404040] transition-all duration-300 flex-1'>
                  <Outlet />
              </section>  : <Navigate to={'/'} />}
          </div>
        </AdminRequestProvider>
      </AdminUsersProvider>


    </AdminProductsProvider>

  )
}

export default AdminLayout
