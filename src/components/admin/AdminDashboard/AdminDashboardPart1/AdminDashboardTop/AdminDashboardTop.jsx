
const AdminDashboardTop = ({
  id,
  titleName,
  description,
  price,
  valorization,
  stock,
  images,
  statusLabel,
}) => {
  return (
    <section className='flex flex-col justify-between gap-[10px] p-[12px] bg-dashboardPurpleBg h-full rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300'>
      <div className='flex justify-center items-center 1300to1442:justify-start'>
        <h3 className='text-text-white text-[14px] 1300to1442:text-[16px]'>Mas vendido del Mes</h3>
      </div>

      <div className='flex flex-col justify-between flex-1 gap-[10px] items-center 1300to1442:flex-row'>
        <div className='flex items-center justify-center w-[80px] h-[80px] p-1 rounded-[6px] overflow-hidden bg-[#eeeeee13] transition-all duration-300'>
            <img
                src={images?.[0].url}
                alt={titleName}
                className='w-full h-full object-contain'
            />
        </div>

        <div className="flex flex-col items-center">
          <span className='text-text-white text-[16px]'>
            {titleName && titleName}
          </span>

          <span className='text-text-white text-[14px]'>
            S/. {price && price.toFixed(2)} 
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-text-white text-[16px]">Quedan en stock </span>
          <span className='text-text-white text-[14px]'>
            {stock && stock} unidades
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-text-white text-[20px] 1442:text-[30px]">{valorization && valorization}</span>
          <span className='text-text-white text-[14px]'>
            Veces vendido
          </span>
        </div>
        
      </div>
    </section>
  )
}

export default AdminDashboardTop
