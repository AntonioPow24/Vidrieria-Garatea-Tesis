

const Loader = ({mode = "white", message}) => {
  return (
    <div className='flex justify-center items-center gap-3 w-full h-full'>
        <span className={`${mode === "white"? "text-adminTextWhite" : "text-textDark"}`}>{ message }</span>
        <div className={`${mode === "white" ? "spinner" : "spinnerDark" }`}></div>
    </div>
  )
}

export default Loader
