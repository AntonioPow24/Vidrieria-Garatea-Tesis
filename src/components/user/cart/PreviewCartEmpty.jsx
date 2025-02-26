import { useNavigate } from 'react-router-dom'

const PreviewCartEmpty = ({ closeCart }) => {

  const navigate = useNavigate()

  const handleNavigate = (path) =>{
    navigate( path )
    closeCart()
  }

  return (
    <div className='flex justify-center flex-col text-center py-6 px-[20px] gap-2'>
      <span className='text-2xl text-text-blueClient font-bold'>Tu carrito está vacío!</span>

      <span className='text-[14px] text-textDark'>Agrega productos para poder realizar una compra</span>

      <button 
        className={`bg-text-blueClient text-white mt-6 py-3 rounded-[5px] btnGoShop`}
        onClick={() => handleNavigate('/tienda/siliconas')}
      >
        <span className='text-xl'>Comprar ahora</span>

      </button>

    </div>
  )
}

export default PreviewCartEmpty
