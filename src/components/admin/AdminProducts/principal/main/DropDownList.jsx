import { useEffect, useRef, useState } from "react";

const DropDownList = ({ changeFunction, optionsArray, titleButton, sectionMode="noId" }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const filterRef = useRef(null);

    const toggleDropdown = () => {
      setIsDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
            const handleClickOutside = (event) => {
                if (filterRef.current && !filterRef.current.contains(event.target)) {
                    setIsDropdownOpen(false);
                }
            };
            if (isDropdownOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
      }, [isDropdownOpen]);


  return (
    <div className={`relative z-20 `} onClick={toggleDropdown} ref={filterRef}>
        <button className='text-adminTextPurple  bg-transparent  dark:text-skyBlueApp flex justify-between items-center capitalize transition-all duration-300 w-full gap' type="button"
        >
            { titleButton } 
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-[200px] bg-white dark:bg-[#404040]  rounded-md shadow-lg py-2 transition-all duration-300">

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
