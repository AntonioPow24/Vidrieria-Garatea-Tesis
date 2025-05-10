import React from 'react'

const LoaderBig = ({mode = "white", message}) => {
  return (
    <div className='flex justify-center items-center gap-4 w-full h-full'>
        <span className={`${mode === "white"? "text-adminTextWhite" : "text-textDark"} text-[24px]`}>{ message }</span>
        <div className={`${mode === "white" ? "spinnerBig" : "spinnerBigDark" }`}></div>
    </div>
  )
}

export default LoaderBig
