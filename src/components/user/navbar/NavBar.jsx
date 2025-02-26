import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


import DropDown from './Dropdown'

import Modal from '../../shared/Modal'
import NavLinks from './NavLinks'
import NavLinksResponsive from './NavLinksResponsive'
// import PreviewCartContainer from '../../../components/public/Cart/PreviewCartContainer'

import '../../../styles/user/navBar.css'

import { useCartContext } from '../../../context/CartContext'
import { useLoginContainerContext } from '../../../context/LoginContainerContext'
import AuthContainer from '../authentication/AuthContainer'
import { useAuth } from '../../../context/UserContext'
import PreviewCartContainer from '../cart/PreviewCartContainer'



export const dropDownLinks = ['tienda']

const NavBar = () => {


    // Objeto Estados para los DropDowns
    const [dropDowns , setDropDowns] = useState({tiendaDropDown:false, profileDropDown:false, proyectosDropDown:false})

    //Estado para el scrolling
    const [isScrolled, setIsScrolled] = useState(false)

    //Estado para el menu de navegacion
    const [isMenuOpen , setIsMenuOpen]= useState(false)



    // USE CONTEXT 
    const { isLogin, openLogin, toggleLogin, closeLogin } = useLoginContainerContext()

    const { user , setUser} = useAuth()

    const { isCartModal, toggleCart } = useCartContext()






    // USE EFFECT PARA CONTROLAR EL SCROLLING
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        


        window.addEventListener('scroll', handleScroll, {passive: true});

    
        return () => {
          window.removeEventListener('scroll', handleScroll);

        };
      }, []);

    //USE EFFECT PARA CONTROLAR EL INNERWIDTH DE LA PANTALLA PARA EL MENU
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[isMenuOpen])



    // Arreglo de Links
    const linksClient = ['inicio','proyectos','tienda','contacto']
    



    // ============= FUNCIONES ================
    // Funcion para el Dropdown de cada Elemento
    const handleDropDown = (type) =>{

            // Cerrar todos los dropdowns antes de abrir uno nuevo
            setDropDowns({
                tiendaDropDown: false,
                proyectosDropDown: false,
                profileDropDown: false
            });



            // Abrir el dropdown correspondiente
            setDropDowns((prevDropDowns) => ({
                ...prevDropDowns,
                [`${type}DropDown`]: !dropDowns[`${type}DropDown`]
            }));

        }      

    //Funcion para Abrir o Cerrar el icono MENU
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }


    // Funcion dinamica para El inicio de Sesion
    const sesionVerify = () => {
        if( user ) {
            handleDropDown('profile')
            return
        }

        openLogin()
    }



    const scrollingStyle = `${(isScrolled || isMenuOpen)  && `scrollingStyle`}` //Scrollings State

    const navLinksStyle =` laptop:absolute  laptop:bg-[rgba(0,0,0,0.3)] laptop:backdrop-blur-[90px] laptop:top-[100%] laptop:left-0 laptop:w-full laptop:py-5 laptop:px-[2%] laptop:justify-center tabletMin:flex hidden items-center`

    const navLinkResponsiveStyle = `${isMenuOpen? `flex flex-col absolute top-[100%] left-0 w-full py-5 px-[2%] ` : 'hidden'} `  

    const titleEnterprice = isMenuOpen || 'smallTablet:hidden'





  return (
    <>
        <nav className={`flex px-[2%] justify-between fixed w-full py-3 z-10 ${scrollingStyle} `} >
            <div className={`flex items-center gap-3 flex-1 `}>
                <Link href={'/'} className='w-[100px] 685:w-[70px]'>
                    <img 
                        className='object-cover'
                        src="https://i.postimg.cc/cJ15ZVKL/Vidrieria-Garatea-Logo.png" alt="Logo Vidrieria Garatea" />
                </Link>

                <Link 
                    href={'/'} 
                    className={`transition-all duration-300 text-3xl text-text-white font-normal tablet:text-2xl  ${titleEnterprice}`}
                >
                    Vidrieria Garatea
                </Link>
            </div>

            <div className="flex items-center gap-14 bigTablet:gap-5">

            
                {/* Icono del menú para pantallas más pequeñas */}
                <div className="tabletMin:hidden">
                    <i className={`text-text-white text-3xl fa-solid  ${isMenuOpen? 'fa-x pr-4' : 'fa-bars'} cursor-pointer`} onClick={toggleMenu}></i>
                </div>


                {/* NAVEGACION */}
                <NavLinks
                    navLinksStyle={navLinksStyle}
                    linksClient={linksClient}
                    dropDowns={dropDowns}
                    setDropDowns={setDropDowns}
                    handleDropDown={handleDropDown}
                />

                {/* NAVEGACION RESPONSIVE*/}

                <NavLinksResponsive
                        navLinkResponsiveStyle={navLinkResponsiveStyle}
                        linksClient={linksClient}
                        handleMenuClose={toggleMenu}
                />
                


                {/* CARRITO Y PERFIL */}
                <div className={`flex items-center text-text-white gap-8 ${isMenuOpen && 'hidden'} `}>

                    <div>
                        <i 
                            className=" text-3xl fa-solid fa-cart-shopping cursor-pointer"
                            onClick={ toggleCart }
                        ></i>

                        {isCartModal && 
                            //MODAL DEL PREVIEW CARRITO
                            <Modal 
                                toggleModal={ toggleCart } 
                                isModal={isCartModal}
                                anotherClass='justify-end'
                            > 
                                <PreviewCartContainer /> 
                            </Modal>

                        }
                    </div>

                    <div 
                        className="flex gap-2 items-center cursor-pointer relative"
                        onClick={sesionVerify}
                    >
                        <i className="text-3xl fa-regular fa-circle-user"></i>
                        <span className='text-xl smallPhone:hidden'> 
                            {
                                user ? user.userName? user.userName : user.email : 'Iniciar Sesion'

                            }
                        </span>

                        {
                            //Logica para aparecer el dropDown
                            dropDowns.profileDropDown && 

                                <DropDown setDropDowns={setDropDowns} toElement='profile' />
                        }


                    </div>

                </div>

            </div>

        </nav>
        {
            isLogin &&
            
                <Modal
                    isModal={ isLogin }
                    toggleModal={ toggleLogin }
                    anotherClass='justify-center items-center'
                >
                    <AuthContainer closeAuth={ closeLogin } />
                </Modal>
        }
    </>
  )
}

export default NavBar
