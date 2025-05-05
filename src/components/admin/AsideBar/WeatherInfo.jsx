import { useCurrentDate } from "../../../hooks/dateHooks/useCurrentDay"


const WeatherInfo = ({ name, main }) => {

    const { formattedDate, formattedDay, formattedTime, period } = useCurrentDate()

  return (
    <div className="flex flex-col bg-[#DDDDDD61] w-[224px] h-[195px] rounded-[16px] py-[13px] px-[20px] justify-between">
            
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <span className='dark:text-textWhiteTransparent text-[18px] text-adminTextDark transition-all duration-300 capitalize'>{ formattedDate }</span>
                <span className='dark:text-textWhiteTransparent text-[12px] leading-none text-adminTextDark transition-all duration-300'>Nvo. { name }</span>
            </div>

            <div className="flex items-center justify-center">
                <i className="fa-solid fa-cloud text-adminTextDark text-3xl dark:text-textWhiteTransparent transition-all duration-300"></i>
            </div>
        </div>
    
        <div className="flex justify-between">
            <div className="flex">
                <span className='text-adminTextDark text-6xl dark:text-textWhiteTransparent transition-all duration-300'>{ main?.temp }</span>
                <div className="flex items-end justify-center">
                    <span className='text-[18px] text-adminTextDark dark:text-textWhiteTransparent transition-all duration-300'>°C</span>
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <span className='text-[14px] flex gap-1 items-center dark:text-textWhiteTransparent transition-all duration-300'>
                    <i className="fa-solid fa-arrow-up text-adminTextDark dark:text-textWhiteTransparent transition-all duration-300"></i>
                    { main?.temp_max }°
                </span>
                <span className='text-[14px] flex gap-1 items-center dark:text-textWhiteTransparent transition-all duration-300'>
                    <i className="fa-solid fa-arrow-down text-adminTextDark dark:text-textWhiteTransparent transition-all duration-300"></i>
                    { main?.temp_min }°
                </span>
            </div>

            <div className="flex flex-col justify-between">
                <span className='text-[14px] flex gap-1 items-center dark:text-textWhiteTransparent transition-all duration-300'>
                    <i className="fa-solid fa-droplet text-adminTextDark dark:text-textWhiteTransparent transition-all duration-300"></i>
                    { main?.humidity }%
                </span>
                <span className='text-[14px] flex gap-1 items-center dark:text-textWhiteTransparent transition-all duration-300'>
                    <i className="fa-solid fa-temperature-high text-adminTextDark dark:text-textWhiteTransparent transition-all duration-300"></i>
                    { main?.feels_like }%
                </span>
            </div>

        </div>

        <div className="flex justify-between">
            <div className="flex items-end gap-1">
                <span className='dark:text-textWhiteTransparent text-adminTextDark transition-all duration-300 text-[28px]'>{ formattedTime }</span>
                <span className='text-adminTextDark text-[13px] pb-1 dark:text-textWhiteTransparent transition-all duration-300'>{ period }</span>
            </div>

            <div className="flex items-end">
                <span  className='text-adminTextDark pb-1 capitalize dark:text-textWhiteTransparent transition-all duration-300'>{ formattedDay }</span>
            </div>
        </div>

    </div>
  )
}

export default WeatherInfo
