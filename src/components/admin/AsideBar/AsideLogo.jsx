const AsideLogo = () => {
    return (
      <div className="flex py-[37px] px-[28px] gap-2">
          <div className="flex justify-center items-center w-[52px]">
              <img src='/public/VidrieriaGarateaLogo.png' alt="" />
          </div>
  
          <div className="flex flex-col gap-1 items-left justify-center transition-all duration-300">
              <span className='text-[18px] text-adminTextDark dark:text-adminTextWhite leading-none transition-all duration-300'>Vidrieria Garatea</span>
              <span className='text-[12px] text-adminTextDark  dark:text-adminTextWhite leading-none transition-all duration-300'>Modo Administrador</span>
          </div>
      </div>
    )
  }
  
  export default AsideLogo