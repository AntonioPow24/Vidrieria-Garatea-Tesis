import { NavLink } from 'react-router-dom'

const LinkItem = ({ nameLink, link, iconRef }) => {
  return (
    <NavLink 
        className={({ isActive }) => 
            `px-[35px]  h-[50px] flex items-center gap-4 transition-all duration-300 ${isActive ? 'active bg-adminBgContrast dark:bg-[#404040] font-medium' : ''}`
        }
        to={link}
        end
    >
        <div className="w-[30px] iconLinkAdmin transition-all duration-300">
            <i className={`fa-solid ${ iconRef } text-[22px] text-[#444] dark:text-[#555] transition-all duration-300`}></i>
        </div>
        <span className='text-adminTextDark text-[18px] capitalize linkName transition-all duration-300 dark:text-adminTextWhite'>{ nameLink }</span>
    </NavLink>
  )
}

export default LinkItem