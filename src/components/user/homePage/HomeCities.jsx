import BorderWave from '../../shared/BorderWave'

const HomeCities = () => {

    // ESTILOS PARA EL MAQUETADO
    const flexCenterStyle = 'flex items-center justify-center'
    const spanBubbleStyle ='text-2xl 685:text-xl'
    const containerStyle= 'flex items-center justify-between bg-[#333] pt-[90px] pb-[212px] bigPhone:pb-[118px] px-[15%]  685:px-[8%] smallDesktop:flex-col smallDesktop:gap-10 relative'

  return (
    <section className={`${containerStyle}`}>

        <div className={`${flexCenterStyle} max-w-[593px] smallDesktop:max-w-full `}>
            <p className='text-text-white text-[50px] 1000:text-[40px] leading-tight smallDesktop:text-center 685:text-[40px] bigPhone:text-3xl'>
                Brindamos 
                <span className='text-text-blueClient'> servicio de vidrieria </span>
                en localidades como:
            </p>
        </div>

        <div className={`${flexCenterStyle} h-[305px] bigPhone:h-[250px] max-w-[590px] gap-[30px] 685:gap-0 `}>
            <div className="flex items-end h-full">
                    <div className={`w-[200px] h-[200px] 685:w-[160px] 685:h-[160px] bigPhone:w-[120px] bigPhone:h-[120px] bg-skyBlueApp rounded-full firstBubble ${flexCenterStyle} `}>
                        <span className={`${spanBubbleStyle}`}>Chimbote</span>
                    </div>
            </div>

            <div className="flex items-start h-full">
                    <div className={`w-[140px] h-[140px] 685:w-[100px] 685:h-[100px] rounded-full bg-text-blueClient ${flexCenterStyle} secondBubble `}>
                        <span className={`${spanBubbleStyle} text-text-white`}>Trujillo</span>
                    </div>
            </div>

            <div className="flex items-end h-full ml-[17px] ">
                    <div className={`w-[180px] h-[180px] 685:w-[140px] 685:h-[140px] bigPhone:w-[100px] bigPhone:h-[100px] bg-skyBlueApp  rounded-full thirdBubble ${flexCenterStyle} `}>
                        <span className={`${spanBubbleStyle}`}>Lima</span>

                    </div>
            </div>
        </div>
        
        <BorderWave />
    </section>
  )
}

export default HomeCities
