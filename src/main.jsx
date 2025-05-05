import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router.jsx'

import LoginContainerContextProvider from './context/LoginContainerContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { RequestProvider } from './context/RequestContext.jsx'
import DarkThemeContextProvider from './context/DarkThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UserProvider >

      <LoginContainerContextProvider>

          <RequestProvider>

            <DarkThemeContextProvider>

            <RouterProvider router={ router } />  

            </DarkThemeContextProvider>

          </RequestProvider>

      </LoginContainerContextProvider>

    </UserProvider >

  </StrictMode>,
)
