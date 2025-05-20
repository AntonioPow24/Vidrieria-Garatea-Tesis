import React from 'react'
import { useDarkThemeContext } from '../../context/DarkThemeContext';

const OrderListIcon = () => {

const { darkTheme } = useDarkThemeContext();
  return (
    <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M12 10.5L9 7.5L6 10.5" 
            stroke={darkTheme? "#EDEDED" :"#404040"} 
            strokeWidth="1.25" 
            strokeLinecap="round"
            className='transition-all duration-300'
        />
        <path 
            d="M12 16.5L9 19.5L6 16.5" 
            stroke={darkTheme? "#EDEDED" :"#404040"}
            strokeWidth="1.25" 
            strokeLinecap="round"
            className='transition-all duration-300'
        />
    </svg>

  )
}

export default OrderListIcon
