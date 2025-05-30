const SmallLoader = ({ message }) => {
  return (
    <div className='flex justify-center items-center gap-3 w-full'>
        <span className='text-adminTextWhite'>{ message }</span>
        <div className="spinner"></div>
    </div>
  )
}

export default SmallLoader
