import { Link } from "react-router-dom"

const ProjectHeaders = () => {

    const number = '928517790'

  return (
    <div className="px-[5%] 849to1480:pt-[215px] pt-[150px] pb-[96px] 1320:flex 1320:justify-center 580:pb-[30px]">
        <div className="flex flex-col max-w-[513px] gap-5 1320:text-center 1320:items-center 580:gap-2">
            <h1 className="text-text-white text-7xl 580:text-[40px]">
                NUESTROS 
                <span className="text-skyBlueApp"> PROYECTOS</span>
            </h1>

            <p className="text-text-white text-2xl 580:text-xl">Transformamos tus ideas en realidades Contáctanos y comencemos a construir juntos!</p>

            <Link 
                className={'bg-text-white px-[28px] py-[8px] max-w-[194px] rounded-[6px] flex  gap-3 items-center justify-center mt-[23px] hover:bg-[#DFDFDF] transition-all duration-300 580:max-w-full 580:w-full'}
                to={`https://wa.me/${number}`}
                target="_blank"
            >
                <span className='text-textDark font-semibold text-xl 580:text-[16px]'>Escríbenos</span>
                <i className="fa-brands fa-whatsapp font-semibold text-xl pt-1 580:text-[16px]"></i>
            </Link>
        </div>
    </div>
  )
}

export default ProjectHeaders
