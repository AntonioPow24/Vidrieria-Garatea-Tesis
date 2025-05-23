import { Navigate, Outlet } from 'react-router-dom'



import Footer from '../components/user/footer/Footer'
import NavBar from '../components/user/navbar/NavBar'

import { useAuth } from '../context/UserContext'
import CartContextProvider from '../context/CartContext'
import UserProductsContextProvider from '../context/ProductsContext/UserProductsContext'




const UserLayout = () => {

    const { user } = useAuth()
   
  return (

    <UserProductsContextProvider>

      <CartContextProvider>
        <div>

          <NavBar />
            {user && user.roles[0] === 'ADMIN'? <Navigate to={'/ADMIN'}/> : <Outlet /> } 
          <Footer />

        </div>
      </CartContextProvider>

    </UserProductsContextProvider>

  )
}

export default UserLayout
