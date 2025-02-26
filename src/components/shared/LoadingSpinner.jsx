import '../../styles/user/loadingSpinner.css'

const LoadingSpinner = ({ sizeSpinner }) => {
    return (
      <div className={`lds-dual-ring w-[35px] h-[35px] after:w-[35px] after:h-[35px] `}></div>
    )
  }
  
  export default LoadingSpinner