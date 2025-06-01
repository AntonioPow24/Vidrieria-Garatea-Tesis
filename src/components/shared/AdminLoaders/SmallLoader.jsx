const SmallLoader = ({ message, colorText="text-adminTextWhite" }) => {
  return (
    <div className='flex justify-center items-center gap-3 w-full'>
        <span className={colorText}>{ message }</span>
        <div className="spinner"></div>
    </div>
  )
}

export default SmallLoader
