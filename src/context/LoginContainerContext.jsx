import { createContext, useContext, useState } from "react";


export const LoginContainerContext = createContext()

const LoginContainerContextProvider = ( { children } ) => {

    const [isLogin, setIsLogin] = useState( false )


    // Funciones
    const openLogin = () => setIsLogin( true )
    const closeLogin = () => setIsLogin( false )
    const toggleLogin = () => setIsLogin( prev => !prev )

    return (
        <LoginContainerContext.Provider value={ { isLogin, openLogin, closeLogin, toggleLogin } } >
            { children }
        </LoginContainerContext.Provider>
    )
}

export default LoginContainerContextProvider

export const useLoginContainerContext = () => useContext( LoginContainerContext )