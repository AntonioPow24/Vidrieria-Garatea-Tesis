import { Link } from 'react-router-dom'
import { bancaItems } from '../../../data/bancaItems'
import { categoryProducts } from '../../../data/categoryProducts'
import { ourServices } from '../../../data/ourServices'
import { socialItems } from '../../../data/socialsItems'
import { useUserProductsContext } from '../../../context/ProductsContext/UserProductsContext'


const Footer = () => {

    // Año actual
    const currentYear = new Date().getFullYear()

    //Arreglo de celulares y correos
    const celPhone = ['+51928517790', '+51928517390']
    const gmails = ['garciaromeroantonio24@gmail.com', 'garciaromeroantonio23@gmail.com']

    const { allCategories } = useUserProductsContext()


  return (
    <footer className='flex flex-col  bg-footerBg'>
        <section className=" px-[80px] flex gap-14 py-[50px] justify-between border-b border-text-white 1360:flex-col 700:px-[20px]">
            
            <div className="flex flex-col 1360:items-center gap-[50px] py-[30px] 1320:pb-0">
                <div className="flex items-center">
                    <div className="w-[148px] bigPhone:w-[80px]">
                        <img src="https://i.postimg.cc/cJ15ZVKL/Vidrieria-Garatea-Logo.png" alt="" />
                    </div>

                    <span
                        className='text-text-white text-4xl bigPhone:text-xl'
                    >
                        Vidrieria Garatea
                    </span>
                </div>

                <div className="flex justify-center bigPhone:flex-col-reverse bigPhone:items-center gap-[10px]">
                    <p 
                        className='max-w-[209px] text-text-white bigPhone:text-center'
                    >
                        Aceptamos pagos por transferencia,yape o plin
                    </p>

                    <div className="flex gap-[21px] items-center">
                        {
                            bancaItems && bancaItems.map( banca =>
                                <img
                                    className='w-[40px] h-[40px] rounded-[10px] object-cover' 
                                    src={banca.img} 
                                    alt={banca.title}  
                                    key={banca.id}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col gap-[17px]">
                    <div className="flex justify-start 1360:justify-center">
                        <span className='text-skyBlueApp text-2xl'>Productos</span>
                    </div>

                    <div className="flex flex-col gap-[10px] 1360:items-center">
                        {
                            allCategories?.map( category => 
                                <Link
                                    key={category.id}
                                    to={`/tienda/${category.nameCategory}`}
                                    className='text-text-white capitalize hover:text-skyBlueApp transition-all duration-300'
                                >
                                    {category.titleCategory}
                                </Link>
                            ) 
                        }
                    </div>
            </div>
            
            <div className="flex flex-col gap-[50px] 1360:items-center">

                <div className="flex items-center flex-col gap-[17px]">
                        <div className="flex justify-start">
                            <span className='text-skyBlueApp text-2xl'>Servicios</span>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            {
                                ourServices && ourServices.map( service => 
                                    <span
                                        key={service.title}
                                        className='text-text-white capitalize hover:text-skyBlueApp transition-all duration-300 cursor-pointer'
                                    >
                                        {service.title}
                                    </span>
                                ) 
                            }
                        </div>
                </div>

                <div className="flex flex-col text-text-white justify-center">
                    <div className="flex items-center gap-[6px]">
                        <i className="fa-regular fa-clock mt-1  text-xl"></i>
                        <span className=''>Horario de atencion</span>
                    </div>

                    <span className='text-center'>
                        Lun - Sab 7am - 5pm
                    </span>
                </div>
            </div>
            
            <div className="flex flex-col gap-10">

                <div className="flex flex-col gap-[17px] 1360:items-center">
                    <div className="flex justify-start">
                            <span className='text-skyBlueApp text-2xl'>Encargados</span>
                    </div>

                    <div className="flex flex-col gap-[13px]">
                        {
                            celPhone.map( number => 
                                <Link
                                    to={`https://wa.me/${number}`}
                                    target='_blank'
                                    className='flex gap-[4px] text-text-white items-center hover:text-skyBlueApp transition-all duration-300'
                                    key={number}
                                >
                                    <i className="fa-solid fa-phone"></i>
                                    {number}
                                </Link>
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-[13px] 1360:items-center">
                    <div className="flex justify-start">
                            <span className='text-skyBlueApp text-2xl'>Correos</span>
                    </div>
                    
                    <div className="flex flex-col gap-[13px]">
                        {
                            gmails.map( gmail => 
                                <Link
                                    to={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(gmail)}`}
                                    target='_blank'
                                    className='flex gap-[4px] text-text-white items-center hover:text-skyBlueApp transition-all duration-300'
                                    key={gmail}
                                >
                                    {gmail}
                                </Link>
                            )
                        }
                    </div>
                    
                </div>
            </div>


        </section>

        <section className=' px-[80px] py-[20px] flex justify-between tablet:px-[25px] 700:flex-col-reverse 700:items-center 700:gap-[10px]'>
            <div>
                <span
                    className='text-text-white bigPhone:text-[10px]'
                >
                    Vidrieria Garatea © {currentYear}. Todos los derechos reservados
                </span>
            </div>

            <div className="flex gap-[21px] items-center">
                {
                    socialItems && socialItems.map( social =>
                    
                        <img 
                            className='w-[30px] h-[30px] object-cover' 
                            src={social.img} 
                            alt={social.title}  
                            key={social.id}
                        />
                    )
                }
            </div>
        </section>

    </footer>
  )
}

export default Footer
