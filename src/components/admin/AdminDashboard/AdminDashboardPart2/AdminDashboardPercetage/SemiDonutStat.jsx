
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SemiDonutStat({ data }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(data?.completionPercentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [data?.completionPercentage])

  const radius = 110
  const strokeWidth = 20
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center p-[10px] bg-adminBgWhite dark:bg-appBgBlack rounded-lg duration-300 transition-all">
      <h2 className="text-xl font-semibold text-adminTextDark dark:text-text-white transition-all duration-300">Pedidos Entregados</h2>

      <div className="relative">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Progress circle */}
          <motion.circle
            stroke="#eebd10"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-3xl font-bold text-adminTextPending"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {Math.round(data?.completionPercentage)}%
          </motion.span>
        </div>
      </div>

      <motion.p
        className="text-adminTextDark text-sm text-center dark:text-text-white transition-all duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {data?.completedOrders} de {data?.totalOrdersCurrentMonth} pedidos completados
      </motion.p>
    </div>
  )
}
