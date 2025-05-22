import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../../../data/statsColor'


const AdminStat = ({
  statValue, 
  statValueColor, 
  statTitle, 
  shouldAnimate,
  mainStat = false,
  onClick = () => {},
  active = false,
}) => {

  const colorToStat = colors.find(({ code }) => code === statValueColor).color
    
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayValue(Number(statValue) || 0)
      return
    }
    let current = 0
    const end = Number(statValue) || 0
    if (end === 0) {
      setDisplayValue(0)
      return
    }
    const increment = Math.ceil(end / 40)
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setDisplayValue(end)
        clearInterval(timer)
      } else {
        setDisplayValue(current)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [shouldAnimate, statValue])

  return (
    <div 
      className={`
        flex-1 transition-all duration-300 flex flex-col gap-8px px-[8px] py-1 rounded-[6px] ${active && !mainStat && "bg-adminBgContrast dark:bg-[#404040] "}
        ${mainStat ? "cursor-default" : "cursor-pointer dark:hover:bg-[#404040] hover:bg-adminBgContrast"}
      `}
      onClick={onClick}
    >
      <div 
        className={`text-[40px] font-semibold text-center transition-all duration-300`}
        style={{ color: colorToStat }}
      >
        {displayValue}
      </div>
        <div className={`transition-all duration-300 text-[18px] text-center font-medium ${mainStat ? "text-text-white" : "text-[#AAA]"} ${active && "text-[#808080] dark:text-[#c4c4c4]"} `}>
            {statTitle}
        </div>
    </div>
  )
}

export default AdminStat
