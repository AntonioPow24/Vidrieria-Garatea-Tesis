import React from 'react'
import { Link } from 'react-router-dom'
import ContactFrame from './ContactFrame'

const ContactHeader = () => {

  const number = '+51928517790'
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1171.1964282721178!2d-78.50901138935423!3d-9.116527093795016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8557c220a36f%3A0x9cd9a3e095928a21!2sVIDRIERIA%20GARATEA!5e0!3m2!1sen!2spe!4v1714269797270!5m2!1sen!2spe"

  return (
    <section className='pt-[117px] bg-bgContactHeader px-[20%] pb-[40px] 1650to1700:px-[15%]  1500to1650:px-[10%] 1500:px-0 850to1480:pt-[200px] '>
        <header className='w-full'>
            <div className='flex 1500:flex-col 1500:gap-8'>
                <div className='w-[480px] flex flex-col gap-[30px] 1500:justify-center 1500:w-full 850to1500:px-[20%] 849:px-[5%]'>

                      <div className='flex flex-col gap-[20px]'>
                            <h3 className='text-[60px] text-text-white leading-[65px] 1500:text-center 849:text-[40px] 849:leading-[40px]'>Nos encanta escuchar a nuestros <span className='text-skyBlueApp'>clientes!</span></h3>

                            <p className='text-text-white text-[22px] 1500:text-center 849:text-[16px]'>Visítanos en nuestras oficinas o mándanos un mensaje a través de nuestro whatsapp</p>
                      </div>

                      <div className='w-full'>
                            <Link 
                              className=' bg-appBgWhite w-full rounded-[6px] py-[10px] hover:bg-[#dbdbdb] transition-all duration-300 flex justify-center items-center gap-3'
                              to={`https://wa.me/${number}`}
                              target="_blank"
                            >
                              <span className='text-[18px] text-textDark font-medium'>Escríbenos al whatsapp</span>
                              <i className="fa-brands fa-whatsapp text-[20px] font-medium pt-1"></i>
                            </Link>
                      </div>

                </div>

                <div className=' flex-1 relative 1500:flex justify-center'>

                    <div className='w-[600px] h-[700px] absolute top-[100px] left-[80px] rounded-[12px] overflow-hidden  1500to1650:left-[20%] 1500:relative 1500:top-0 1500:left-0 849:w-[90%] 849:h-[80dvw]'>
                      <ContactFrame
                        iFrameClass={'w-full h-full grayscale-[20%] invert-[95%]'} 
                        mapSrc={ mapSrc }
                      />
                    </div>
                </div>
            </div>
        </header>
    </section>
  )
}

export default ContactHeader
