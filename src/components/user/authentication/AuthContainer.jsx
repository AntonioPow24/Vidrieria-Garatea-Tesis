import React, { useState } from 'react'

import '../../../styles/user/auth/auth.css'
import AuthForm from './AuthForm'


const AuthContainer = ({closeAuth}) => {

  const [isRegister, setIsRegister] = useState( false )



  return (

    <section className={`bg-appBgBlack z-[200] relative  shadow-md rounded-[30px] containerAuth overflow-hidden ${ isRegister && 'active' }`}>
        <AuthForm methodForm={ 'login' } closeAuth={ closeAuth } />

        <AuthForm methodForm={ 'register' } closeAuth= { closeAuth } />

        <article className="absolute w-[100%] h-[100%] toggleBox">
          <div className='togglePanel toggleLeft'>
              <h1 className='text-[38px] font-bold text-text-white'>Bienvenido!</h1>
              <p className='mb-[20px] text-text-white'>No tienes una cuenta?</p>
              <button 
                className='w-[160px] h-[46px] bg-transparent rounded-[2px] border-[2px] border-appBgWhite cursor-pointer font-medium text-text-white register-btn transition-all duration-300 hover:scale-105'
                onClick={ () => setIsRegister( true ) }
              >
                Regístrate
                </button>
          </div>
        </article>

        <article className="absolute w-[100%] h-[100%] toggleBox">
          <div className='togglePanel toggleRight'>
              <h1 className='text-[38px] font-bold text-text-white'>Crea una cuenta!</h1>
              <p className='mb-[20px] text-text-white'>Ya tienes una cuenta?</p>
              <button 
                className='w-[160px] h-[46px] bg-transparent rounded-[2px] border-[2px] border-appBgWhite cursor-pointer font-medium text-text-white register-btn transition-all duration-300 hover:scale-105'
                onClick={ () => setIsRegister( false ) }
              >
                Inicia sesión
                </button>
          </div>
        </article>
    </section>

  )
}

export default AuthContainer
