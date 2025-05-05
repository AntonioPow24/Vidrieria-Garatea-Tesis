
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/UserContext';
import { AdminProductsProvider } from '../context/ProductsContext/AdminProductsContext';
import AsideContainer from '../components/admin/AsideBar/AsideContainer';
import '../styles/admin/adminMode.css'
import { AdminUsersProvider } from '../context/AdminUsersContext/AdminUsersContext';




const AdminLayout = () => {

    const { user } = useAuth();

  return (

    <AdminProductsProvider>

      <AdminUsersProvider>
        <div className='flex'>
            <AsideContainer />
            {user && user.ROLES[0] === 'admin' ? 
            <section className='bg-adminBgContrast dark:bg-[#404040] transition-all duration-300 flex-1'>
                <Outlet />
            </section>  : <Navigate to={'/'} />}
        </div>
      </AdminUsersProvider>


    </AdminProductsProvider>

  )
}

export default AdminLayout
