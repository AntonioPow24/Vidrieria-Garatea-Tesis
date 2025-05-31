import { useState } from "react"
import { ourServices } from "../../../data/ourServices"

const HomeServices = () => {

    // Estado para el filtro
    const [serviceFilter , setServiceFilter] = useState('Templado')


    

    // funcion para cambiar el filtro
    const handleChangeServiceFilter = (service) =>{
        setServiceFilter(service)
    }    



    
  return (
    <section className='px-[7%] pt-[50px]  pb-[120px] flex flex-col  gap-[56px]'>

        <h3 className='text-text-white text-[55px] text-center pl-8 smallDesktop:text-[45px]'>
            Conoce nuestros
            <span className='text-text-blueClient'> servicios!</span>
        </h3>

        <div className="flex items-center gap-[20px] justify-between 1570:flex-col ">
            <div className={"gridServicesFilter w-full"}>
                {
                    Array.isArray(ourServices) && ourServices.map( service => 
                        <button
                            key={service.title}
                            onClick={() => handleChangeServiceFilter(service.title)}
                            className={`border-b border-text-white py-[27px] max-w-[400px] 720:py-[16px] transition-all duration-300 `}

                        >                           
                            <span className={`uppercase  text-[24px] ${serviceFilter === service.title ? 'text-skyBlueApp' : 'text-text-white'} laptop:text-[18px]`}>{service.title}</span>
                        </button>
                    )
                }
            </div>


            <div className="flex-1 flex  items-center justify-between gap-[20px] laptop:items-start 1320:flex-col">
                <div className="w-[500px] 1320:w-full m-auto 1320:h-[220px] h-[270px] overflow-hidden rounded-[16px]">
                    <img 
                        src={ourServices.find( service => service.title === serviceFilter).img}
                        alt={`imagen de ${serviceFilter}`}
                        className='object-cover w-full h-full object-center' 
                    />
                </div>

                <div className='w-[500px] 700:w-full bigPhone:pt-[40px] 1320:pt-0'>

                    <p className='text-[20px] text-text-white text-justify'>
                        {ourServices.find(service => service.title === serviceFilter).description}
                    </p>

                </div>
            </div>



        </div>



    </section>
  )
}

export default HomeServices
