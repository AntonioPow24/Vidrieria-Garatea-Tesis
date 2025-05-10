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

        <div className="flex items-center justify-center gap-[56px] 1780:flex-col">
            <div className={"flex flex-col "}>
                {
                    ourServices && ourServices.map( service => 
                        <button
                            key={service.title}
                            onClick={() => handleChangeServiceFilter(service.title)}
                            className={`border-b border-text-white py-[27px] px-[130px] transition-all duration-300  smallDesktop:px-[90px]`}

                        >                           
                            <span className={`uppercase  text-[28px] ${serviceFilter === service.title ? 'text-skyBlueApp' : 'text-text-white'} laptop:text-[20px]`}>{service.title}</span>
                        </button>
                    )
                }
            </div>


            <div className="flex gap-[56px] items-center laptop:items-start 1320:flex-col 1320:gap-10">
                <div className="w-[600px] 700:w-full m-auto 700:h-[250px] h-[387px] overflow-hidden rounded-[16px]">
                    <img 
                        src={ourServices.find( service => service.title === serviceFilter).img}
                        alt={`imagen de ${serviceFilter}`}
                        className='object-cover w-full h-full object-center' 
                    />
                </div>

                <div className='w-[600px] 700:w-full bigPhone:pt-[40px] 1320:pt-0'>

                    <p className='text-[26px] text-text-white text-justify'>
                        {ourServices.find(service => service.title === serviceFilter).description}
                    </p>

                </div>
            </div>



        </div>



    </section>
  )
}

export default HomeServices
