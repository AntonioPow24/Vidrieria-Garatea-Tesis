import BarChart from "./BarChart"

const AdminDashboardDiagram = ({dataChart}) => {
  return (
    <div className="bg-adminBgWhite h-full rounded-xl py-[10px] dark:bg-appBgBlack transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.2)]">
      <BarChart data={dataChart}/>
    </div>
  )
}

export default AdminDashboardDiagram
