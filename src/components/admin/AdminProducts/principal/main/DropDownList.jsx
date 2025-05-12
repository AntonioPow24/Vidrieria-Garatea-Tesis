import { useState } from "react";

const DropDownList = ({ changeFunction, optionsArray, titleButton, sectionMode="noId" }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(prevState => !prevState);
    };



  return (
    <div className="relative z-20" onClick={toggleDropdown}>
        <button className='text-adminTextPurple  bg-transparent  dark:text-skyBlueApp flex items-center capitalize transition-all duration-300' type="button"
        >
            { titleButton } 
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-[200px] bg-white dark:bg-[#404040]  rounded-md shadow-lg py-2 transition-all duration-300">

            { sectionMode === "yesId" ? 
            
              optionsArray.map( option => 
                <span
                  key={ option.id } 
                  className='optionStyle cursor-pointer'
                  onClick={ () => changeFunction( option.id ) }
                >
                  { option.option }
                </span>
              ) 
            : 
            optionsArray.map( option => 
                <span
                    key={ option } 
                    className='optionStyle cursor-pointer'
                    onClick={ () => changeFunction( option ) }
                >
                    { option }
                </span>
             ) }

          </div>
        )}
    </div>

  )
}

export default DropDownList
