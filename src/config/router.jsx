import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";


import NotFound from '../components/shared/NotFound'

import Home from "../pages/user/Home";
import Projects from '../pages/user/Projects'
import Shop from '../pages/user/Shop'
import ShopCategory from '../pages/user/ShopCategory'
import ProductDetail from '../pages/user/ProductDetail'
import Contact from '../pages/user/Contact'
import ConfigurationProfile from '../pages/user/ConfigurationProfile'


import Dashboard from '../pages/admin/Dashboard'
import ProductsAdmin from '../pages/admin/ProductsAdmin'
import RequestsAdmin from '../pages/admin/RequestsAdmin'
import UsersAdmin from '../pages/admin/UsersAdmin'
import ResumeCart from "../pages/user/ResumeCart";
import ResumePaid from "../pages/user/ResumePaid";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <UserLayout />,
        children: [
            {
                index:true,
                element: <Home />
            },
            {
                path:'/proyectos',
                element: <Projects />
            },
            {
                path:'/tienda',
                element: <Shop />,
            },
            {
                path:'/tienda/:categoryName',
                element: <ShopCategory />,
            },
            {
                path:'/tienda/:categoryName/:productId',
                element: <ProductDetail />
            },
            {
                path:'/contacto',
                element: <Contact />
            },
            {
                path:'/configuration/:typeConfig',
                element: <ConfigurationProfile />,
            },
            {
                path:'/cart/continue',
                element: <ResumeCart />,
            },
            {
                path:'/cart/paid/:requestId',
                element: <ResumePaid />,
            },
            {
                path:'*',
                element:<NotFound /> ,
            },
        ]
    },

    {
        path:'/admin',
        element: <AdminLayout />,
        children: [
            {
                index:true,
                element: <Dashboard />
            },
            {
                path:'productsAdmin',
                element: <ProductsAdmin />
            },
            {
                path:'requestsAdmin',
                element: <RequestsAdmin />
            },
            {
                path:'usersAdmin',
                element: <UsersAdmin />
            },
        ]
    }

])