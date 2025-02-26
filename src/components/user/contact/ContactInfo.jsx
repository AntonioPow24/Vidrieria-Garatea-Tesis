import React from 'react'

const ContactInfo = () => {
  return (
    <section className='h-[550px] bg-appBgBlack px-[20%] flex justify-start py-[40px] 1650to1700:px-[15%] 1500to1650:px-[8%] 849:px-[5%] 1500:justify-center 849:h-[750px]'>
      <div className='w-[480px] flex flex-col justify-between'>
        
        <div className='flex justify-between items-center 849:flex-col 849:gap-[1.4em]'>
              <div className='flex flex-col w-[220px] gap-[8px] p-[12px] bg-[#1a1a1a] rounded-[8px] transition-all duration-300 hover:translate-y-[-4px] 849:w-full 849:items-center'>
                    <span className='text-[#F9F9F9A8] text-[20px] cursor-default'>Razón social</span>
                    <span className='text-[16px] text-text-white cursor-default'>Vidriería Garatea E.I.R.L</span>
              </div>

              <div className='flex flex-col w-[220px] gap-[8px] p-[12px] bg-[#1a1a1a] rounded-[8px] transition-all duration-300 hover:translate-y-[-4px] 849:w-full justify-center 849:items-center'>
                    <span className='text-[#F9F9F9A8] text-[20px] cursor-default'>Razón social</span>
                    <span className='text-[16px] text-text-white cursor-default'>Vidriería Garatea E.I.R.L</span>
              </div>
        </div>

        <div className='flex justify-between items-center 849:flex-col 849:gap-[1.4em]'>
              <div className='flex flex-col w-[220px] gap-[8px] p-[12px] bg-[#1a1a1a] rounded-[8px] transition-all duration-300 hover:translate-y-[-4px] 849:w-full justify-center 849:items-center'>
                    <span className='text-[#F9F9F9A8] text-[20px] cursor-default'>Inicio</span>
                    <span className='text-[16px] text-text-white cursor-default'>01 de Julio del 2014</span>
              </div>

              <div className='flex flex-col w-[220px] gap-[8px] p-[12px] bg-[#1a1a1a] rounded-[8px] transition-all duration-300 hover:translate-y-[-4px] 849:w-full justify-center 849:items-center'>
                    <span className='text-[#F9F9F9A8] text-[20px] cursor-default'>Empleos</span>
                    <span className='text-[16px] text-text-white cursor-default'>Escríbenos al wssp</span>
              </div>
        </div>

        <div className='flex justify-between items-center'>
              <div className='flex flex-col w-full gap-[8px] p-[12px] bg-[#1a1a1a] rounded-[8px] transition-all duration-300 hover:translate-y-[-4px] 849:items-center'>
                    <span className='text-[#F9F9F9A8] text-[20px] cursor-default'>Actividad</span>
                    <span className='text-[16px] text-text-white cursor-default 685:text-[14px]'>Venta de artículos de Ferretería y otros servicios NCP</span>
              </div>

        </div>

        <div className='flex flex-col justify-between items-center'>
              <div className='flex w-full gap-[12px] p-[10px] items-center'>
                    <i className="fa-solid fa-clock text-[24px] text-text-white"></i>
                    <span className='text-[16px] text-text-white cursor-default 685:text-[12px]'>Atendemos de Lunes a Viernes 8am - 5pm y Sábados 8am - 1pm</span>
              </div>

              <div className='flex w-full gap-[12px] p-[12px] items-center'>
                    <i className="fa-solid fa-location-dot text-[24px] text-text-white"></i>
                    <span className='text-[16px] text-text-white cursor-default 685:text-[12px]'>Av. Agraria, 2323 Garatea - Nuevo Chimbote</span>
              </div>
        </div>


      </div>
    </section>
  )
}

export default ContactInfo
