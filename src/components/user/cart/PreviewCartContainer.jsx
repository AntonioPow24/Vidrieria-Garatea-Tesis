
import PreviewCartItem from './PreviewCartItem'
import PreviewCartEmpty from './PreviewCartEmpty'
import PreviewCartContinue from './PreviewCartContinue'

import '../../../styles/user/cart/prevCart.css'
import { useCartContext } from '../../../context/CartContext'


const PreviewCartContainer = () => {


    // Destrucutracion del CartContext
    const { cart, closeCart,total, toggleCart } = useCartContext()

    // Estilos para el Contenedor Preview Carrito   
    const containerStyle = 'w-[500px] z-20 flex flex-col bg-appBgWhite  bigPhone:w-[390px] '
    const paddingStyle = 'px-[20px] py-[10px]'
    const borderStyle = 'border-b border-[#c4c4c4]'
    
    return (
    <section 
        className={`${containerStyle}  overflow-hidden h-[100dvh] previewCartContainer`}
    >
        <div className={`flex justify-between items-center text-textDark text-2xl  ${paddingStyle} ${borderStyle}`}>
            <h3 className='uppercase font-semibold'>mi carrito</h3>
            <i 
                className="fa-solid fa-x cursor-pointer"
                onClick={toggleCart}
            ></i>
        </div>

        <main className={` ${borderStyle} flex-1 flex flex-col overflow-y-auto mr-1 previewCartMain`}>

        {

            cart?.length ? cart.map(itemCart => 
                    
                <PreviewCartItem classComponent={paddingStyle} key={itemCart.id} {...itemCart} />)

            : <PreviewCartEmpty closeCart={closeCart} />

        }

        </main>

        <PreviewCartContinue dataCart={ cart } closeCart={ closeCart } total={ total } />  
    </section>
  )
}

export default PreviewCartContainer
