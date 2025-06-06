import BarChart from "./BarChart"

const AdminDashboardDiagram = ({dataChart}) => {
  return (
    <div className="rounded-xl bg-adminBgWhite dark:bg-appBgBlack p-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col justify-center items-center">
      <div className='flex justify-between items-center w-full'>
        <h2 className='text-[18px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 font-semibold mb-[12px]'>
          Productos vendidos / Ventas realizadas este año
        </h2>
      </div>
      <div className="w-full">
        <BarChart data={dataChart}/>
      </div>
    </div>
  )
}

export default AdminDashboardDiagram
