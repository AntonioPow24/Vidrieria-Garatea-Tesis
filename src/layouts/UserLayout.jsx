import { Navigate, Outlet } from 'react-router-dom'



import Footer from '../components/user/footer/Footer'
import NavBar from '../components/user/navbar/NavBar'

import { useAuth } from '../context/UserContext'
import CartContextProvider from '../context/CartContext'
import UserProductsContextProvider from '../context/ProductsContext/UserProductsContext'
import { getUserRole } from '../utils/decodeToken'




const UserLayout = () => {

  useAuth()

  const userRole = getUserRole()
    

  return (

    <UserProductsContextProvider>

      <CartContextProvider>
        <div>

          <NavBar />
            {userRole === 'ADMIN'? <Navigate to={'/ADMIN'}/> : <Outlet /> } 
          <Footer />

        </div>
      </CartContextProvider>

    </UserProductsContextProvider>

  )
}

export default UserLayout
