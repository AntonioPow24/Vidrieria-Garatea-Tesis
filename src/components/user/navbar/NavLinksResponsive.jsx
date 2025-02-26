import { Link, useNavigate } from 'react-router-dom'
import { categoryProducts } from '../../../data/categoryProducts';



const NavLinksResponsive = ({ navLinkResponsiveStyle, linksClient, handleMenuClose }) => {

    
    const navigate = useNavigate();

    // Funcion redireccionar
    const handleLinkClick = (link) => {
        if (link === 'tienda' && categoryProducts.length > 0) {
            navigate(`/tienda/${categoryProducts[0].nameCategory}`);
        }
        handleMenuClose()
    }; 


    return (
        <div className={`${navLinkResponsiveStyle}  navLinksResponsive`}>
            <ul className="flex flex-col items-center justify-start h-screen py-10">
                {linksClient.map((link) => (
                    <li key={link} className="my-4">
                        <Link 
                            to={`/${ link === 'inicio' ? '' : link }`}
                            onClick={ () => handleLinkClick(link)}
                        >
                            <span className="text-3xl text-white capitalize hover:text-skyBlueApp transition duration-300">
                                {link}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinksResponsive