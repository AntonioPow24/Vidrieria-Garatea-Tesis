import { createContext, useContext, useState } from "react";


const DarkThemeContext = createContext()

export default function DarkThemeContextProvider({children}){

    const [darkTheme,setDarkTheme] = useState(localStorage.getItem('theme') === 'dark')




    return (
        <DarkThemeContext.Provider value={{darkTheme,setDarkTheme}} >
            { children }
        </DarkThemeContext.Provider>
    )
}


export const useDarkThemeContext = () => useContext(DarkThemeContext)