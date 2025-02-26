

import { useState } from 'react'
import FilterConfig from '../main/FilterConfig'
import PersonalData from '../main/PersonalData'
import Privacity from '../main/Privacity'




const filterConfigArray = [
    { title: 'Datos personales' , filter: 'personalData'},
    { title: 'Privacidad de la cuenta' , filter: 'privacity'},
]

const ConfigMainContainer = () => {

    const [ filterConfig, setFilterConfig ] = useState('personalData')




    // Functions
    const changeFilter = ( filter ) => {
        setFilterConfig( filter )
    }

  return (
    <main className='pl-[120px]  py-[45px] flex bg-appBgBlack gap-[56px] 1070:flex-col 1070:pl-[2%] 1070:pr-[2%] 1070:gap-[35px]'>
        <FilterConfig filterActive={ filterConfig } filterArray={ filterConfigArray } changeFilter={ changeFilter } />

        {
            filterConfig === 'personalData' ? 
                <PersonalData />
            : filterConfig === 'privacity' && 
                <Privacity />   
        }
    </main>
  )
}

export default ConfigMainContainer