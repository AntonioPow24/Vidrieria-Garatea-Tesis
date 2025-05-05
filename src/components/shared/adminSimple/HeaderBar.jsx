const HeaderBar = ({ titleSection, quantity }) => {
    return (
      <div className="h-[78px] px-[24px] flex items-center justify-between bg-dashboardPurpleBg dark:bg-[#54BFE1] transition-all duration-300 py-1">
        <span className="text-text-white text-[26px] dark:text-adminTextDark transition-all duration-300">{ titleSection } ({ quantity })</span>
        <div className=" flex gap-2 items-center">
          <img src="/public/VidrieriaGarateaLogo.png" alt="" className="w-[65px]"/>
          <span className="text-2xl text-text-white dark:text-adminTextDark transition-all duration-300">Vidrieria <span>Garatea</span></span>
        </div>
      </div>
    )
  }
  
  export default HeaderBar
  