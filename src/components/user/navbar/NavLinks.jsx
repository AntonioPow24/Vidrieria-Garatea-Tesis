import { Link, NavLink, useNavigate } from 'react-router-dom'
import { dropDownLinks } from './NavBar'
import DropDown from './Dropdown'
import { categoryProducts } from '../../../data/categoryProducts';


const NavLinks = ({navLinksStyle , linksClient , dropDowns, setDropDowns ,handleDropDown}) => {

    const navigate = useNavigate();

    // Funcion redireccionar
    const handleLinkClick = (link) => {
        if (link === 'tienda' && categoryProducts.length > 0) {
            navigate(`/tienda/${categoryProducts[0].nameCategory}`);
        }
    }; 

  return (
    <div className={`laptopMin:flex items-center ${navLinksStyle}`}>
        <ul className='flex   gap-16 font-normal'>
            {
                linksClient.map( link=> 
                    
                    // ELEMENTO POR CADA LINK
                    <div className='flex gap-2 items-center justify-center relative' key={link}>

                    
                        <NavLink 
                            className={ ({isActive}) => `flex  gap-2 items-center justify-center navBarLink ${isActive? 'navLinkActive' : 'text-text-white' }`}
                            
                            to={`/${ link === 'inicio'? '' : link }`}
                            onClick={ () => handleLinkClick( link )}
                        >
                            <span 
                                className='capitalize  text-2xl'

                            >
                                {link}
                            </span>

                        </NavLink>

                        
                        {
                            //Logica para mostrar el DropDown
                            dropDowns[`${link}DropDown`] && dropDownLinks.includes(link) && <DropDown setDropDowns={setDropDowns} toElement={link}/>
                        }

                        {
                            // Agregar una flecha a todos los links que esten dentro de DropDownLinks
                            dropDownLinks.includes(link) &&
                            <i 
                                className={`text-text-white fa-solid fa-chevron-${dropDowns[`${link}DropDown`]? 'up':'down'}`}
                                onClick={() => handleDropDown(link)}
                            >
                            </i> 
                        }
                    </div>

                )
            }
        </ul>
    </div>
  )
}

export default NavLinks