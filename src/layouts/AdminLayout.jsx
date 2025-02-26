
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/UserContext';
// import AsideContainer from '../shared/private/asideBar/AsideContainer'




const AdminLayout = () => {

    const { user } = useAuth();

  return (
    <div className='flex'>
        {/* <AsideContainer /> */}
        {user && user.userRole === 'admin' ? 
        <section className='bg-adminBgContrast dark:bg-[#404040] transition-all duration-300 flex-1'>
            <Outlet />
        </section>  : <Navigate to={'/'} />}
    </div>
  )
}

export default AdminLayout
