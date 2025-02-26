import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {

  const  navigate  = useNavigate()

  return (
    <div className='flex justify-center z-[600] flex-col '>
      <span>Pagina no encontrada</span>
      <br />
      <button onClick={ () => navigate('/')}>Regresar</button>
    </div>
  )
}

export default NotFound
