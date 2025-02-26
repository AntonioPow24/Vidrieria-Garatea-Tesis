import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { dropDownLinks } from './NavBar';
import { categoryProducts } from '../../../data/categoryProducts';



const DropDown = ({setDropDowns , toElement=''}) => {

    // USE REF  
    const dropdownRef = useRef(null);




    const profileLinks = [
            {icon:'wrench', title:'configuracion', path:'configuration/myProfile'} ,
            {icon:'clock-rotate-left', title:'misCompras', path:'configuration/myRequest'} ,
            {icon:'power-off', title:'cerrar sesion'} ,
    ]



    // ======================ESTILOS=======================
    const itemStyle = 'bg-popUpDropDown px-[18px] py-[15px] flex-1  capitalize font-normal transition-all duration-300'
    
    const widthDroPDown = dropDownLinks.includes(toElement)? 'w-[320px]' : toElement === 'profile'? 'w-[170px]' : 'w-[400px]'





    // ==================FUNCIONES========================
    // Funcion cerrar el DropDown Actual
    const closeDropDown = ()=>{
       setDropDowns && setDropDowns(prev => ({...prev,[`${toElement}DropDown`]:false}))

    } 



    // Cerrar el DropDown al dar click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropDowns({
                    tiendaDropDown: false,
                    profileDropDown: false,
                    proyectosDropDown: false
                });
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    
        return (
            <section 
                ref={dropdownRef}
                className={`${widthDroPDown} absolute top-[130%] ${toElement=== 'profile' ? 'right-[1px]' : '0'} flex flex-col rounded-[6px] overflow-hidden`}
                onMouseLeave={closeDropDown}
            >

            {
                // CONTENIDO DE TIENDA CATEGORY
               dropDownLinks.includes(toElement)?

               categoryProducts.length > 0 && 
               
               categoryProducts.map(category => 
                       <Link 
                           key={category.idCategory}
                           to={`/tienda/${category.nameCategory}`}
                           className={`${itemStyle} text-[20px] flex hover:bg-categorySelected hover:text-textDark   transition-all duration-300 text-text-white`}
                           onClick={closeDropDown}
                       >
                           {category.titleCategory}  
                       </Link>
                   )
                   

                //    CONTENIDO DE PROFILE
                : toElement === 'profile' &&
                   profileLinks.map(profileLink => 

                        profileLink.title === 'cerrar sesion'?
                            
                            <button 
                                key={profileLink.title}
                                className={`${itemStyle} flex justify-start items-center gap-2 text-logOut hover:text-text-white hover:bg-logOut`}
                            >
                                <i className={`fa-solid fa-${profileLink.icon}`}></i> 
                                <span className='capitalize'>{profileLink.title}</span>
                                
                            </button>
                        
                        :
                        <Link
                            className= {`${itemStyle}  flex items-center gap-2 text-base hover:bg-categorySelected hover:text-textDark`} 
                            to={`/${profileLink.path}`}
                            key={profileLink.title}
                            onClick={closeDropDown}
                        >
                            <i className={`fa-solid fa-${profileLink.icon}`}></i>
                            {profileLink.title}
                        </Link>
                   )
            }
            </section>
        )

    }

export default DropDown