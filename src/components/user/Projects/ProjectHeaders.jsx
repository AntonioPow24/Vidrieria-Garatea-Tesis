import { Link } from "react-router-dom"

const ProjectHeaders = () => {

    const number = '928517790'

  return (
    <div className="px-[5%] 849to1480:pt-[215px] pt-[150px] pb-[96px] 1320:flex 1320:justify-center">
        <div className="flex flex-col max-w-[513px] gap-5 1320:text-center 1320:items-center">
            <h1 className="text-text-white text-7xl">
                NUESTROS 
                <span className="text-skyBlueApp"> PROYECTOS</span>
            </h1>

            <p className="text-text-white text-2xl">Transformamos tus ideas en realidades Contáctanos y comencemos a construir juntos!</p>

            <Link 
                className={'bg-text-white px-[28px] py-[8px] max-w-[194px] rounded-[14px] flex  gap-3 items-center justify-center mt-[23px] hover:bg-[#DFDFDF] transition-all duration-300'}
                to={`https://wa.me/${number}`}
                target="_blank"
            >
                <span className='text-textDark font-semibold text-xl'>Escríbenos</span>
                <i className="fa-brands fa-whatsapp font-semibold text-xl pt-1"></i>
            </Link>
        </div>
    </div>
  )
}

export default ProjectHeaders
