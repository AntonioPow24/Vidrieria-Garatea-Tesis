import { useEffect } from "react"


import { useDarkThemeContext } from "../../../context/DarkThemeContext"
import { asideLinks } from "../../../data/asideLinks"
import LinkItem from "./LinkItem"

const AsideLinks = () => {

  const {darkTheme ,setDarkTheme} = useDarkThemeContext()

  useEffect(()=>{
    if(darkTheme) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
    }
    else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
  },[darkTheme])

  return (
    <main>
      <div className="flex flex-col gap-2 transition-all duration-300">
        {
          asideLinks.map( link => 
            <LinkItem 
              key={ link.idLinks } 
              nameLink={ link.nameLink } 
              link={ link.linkTo }
              { ...link } 
            />
          )
        }

        <div className="px-[30px] ">
          <div 
            className="px-[8px] py-5 border-t border-[#C1C1C182] flex items-center gap-4 transition-all duration-300 cursor-pointer"
            onClick={ () => setDarkTheme(!darkTheme) }
          >
              <div className="w-[30px] flex justify-center transition-all duration-300">
                <i className="fa-solid fa-moon text-[22px] text-[#444] dark:text-[#555] transition-all duration-300"></i>
              </div>
              <span className="text-adminTextDark text-[18px] transition-all duration-300 dark:text-adminTextWhite ">Dark Mode</span>

              <div className="w-[44px] h-[24px] bg-[#C1C1C182] dark:bg-[#404040] rounded-full ml-1 flex items-center px-1  transition-all duration-300">
                <div className="w-5 h-5 bg-adminBgWhite rounded-full  transition-all duration-300 dark:bg-skyBlueApp dark:translate-x-4"></div>
              </div>
          </div>
        </div>

      </div>

    </main>
  )
}

export default AsideLinks