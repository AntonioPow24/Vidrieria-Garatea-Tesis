import React from 'react'

const Modal = ({isModal= false,toggleModal ,anotherClass='' ,children}) => {

    const showHideClass = isModal ? 'fixed inset-0 absolute h-[100dvh] z-50 flex' : 'hidden'



  return (
    <section className={`${showHideClass} ${ anotherClass }  bg-[#000000ab]`}>
        <div 
            className="absolute w-[100%] h-[100%] inset-0 "
            onClick={ toggleModal }
        >
        </div>
        {children}
    </section>
  )
}

export default Modal