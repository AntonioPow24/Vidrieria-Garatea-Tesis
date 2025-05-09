import { useAuth } from "../../../context/UserContext"

const AsideLogOut = () => {
    const { logout } = useAuth()

    return (
      <div className=" flex items-center justify-center mb-6">
        <button
          className={'bg-red-400 py-1 w-[220px] rounded-[6px] hover:translate-y-[-2px] hover:bg-red-500 transition-all duration-300'}
          onClick={logout}
        >
          <span className='text-text-white '>Cerrar sesión</span>
        </button>
      </div>
    )
  }
  
  export default AsideLogOut