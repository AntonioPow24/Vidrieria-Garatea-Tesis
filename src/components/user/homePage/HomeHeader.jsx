const HomeHeader = () => {
    return (
  
      <div className='h-[700px] relative'>
  
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className='h-[700px] w-full object-cover '
          >
          <source src='./videos/bgHeader.mp4' />
          </video>
  
          <div className="absolute inset-0 bg-[#02052396]  w-full"></div>
  
          <div className="absolute top-0 w-full h-[700px] flex justify-center items-center">
  
              <h1 className="text-5xl font-light text-text-white uppercase text-center max-w-[450px] leading-normal">
                  calidad, seriedad y garantía
              </h1>
          </div>
  
      </div>
    )
  }
  
  export default HomeHeader
  