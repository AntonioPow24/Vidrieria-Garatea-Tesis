import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'




const PreviewCartContinue = ({closeCart, total}) => {

  // USEROUTER
  const navigate = useNavigate()

  const { totalItemsCart, continuePurchase } = useCartContext()




  const expressionItem = totalItemsCart > 1 ? 'items' : 'item'

  

  //Estilos para el maquetado
  const continueButton = `flex justify-center items-center gap-3 flex-1 rounded-3xl py-3  transition-all duration-300 ${totalItemsCart > 0 ? 'bg-text-blueClient hover:bg-[#5f6ad3] hover:translate-y-[-2px]' : 'bg-gray-500 cursor-default' } `

  

  // FUNCIONES
  const handleNavigate= (path) =>{

    if(totalItemsCart > 0){
      continuePurchase()
      closeCart()
    }
  }
  
  return (
    <div className={`px-[20px] pt-6 pb-3 flex flex-col gap-4`}>
      <div className="flex justify-between text-textDark text-xl">
        <p className=''>Subtotal ( {totalItemsCart} {expressionItem} )</p>

        <span>S/ { total.toFixed(2) }</span> 
      </div>

      <div className="flex">
        <button className={continueButton}  onClick={() => handleNavigate('tienda/siliconas')} >
          <span className='text-text-white text-xl font-medium mb-1'>Continuar compra</span>
          <i className=" text-xl fa-solid fa-cart-shopping"></i> 
        </button>
      </div>
    </div>
  )
}

export default PreviewCartContinue
