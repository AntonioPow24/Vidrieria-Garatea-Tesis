
import { useCartContext } from '../../../context/CartContext'
import { useUserProductsContext } from '../../../context/ProductsContext/UserProductsContext'



const PreviewCartItem = ({classComponent,productId, quantity}) => {

  const { getProductDetails } = useUserProductsContext()

  const productDetails = getProductDetails( productId, true )
  


  // Destructuracion del CartContext
  const { increaseProductCount, decreaseProductCount, deleteProduct } = useCartContext()





  // Estilos para el maquetado
  const flexAllCenter = 'flex items-center justify-center'
  const quantityButton = 'px-3 transition-all duration-300 text-text-blueClient hover:text-text-white hover:bg-text-blueClient'




  return (
    <article className={`${classComponent} flex gap-5 previewCartItem h-[120px]`}>

      <div className={`${flexAllCenter} max-w-[90px] w-full p-1`}>

        <div className='w-full h-full flex justify-center items-center'>
          <img 
            src={ productDetails?.imageUrl } 
            alt={ productDetails?.titleName } 
            className=' h-full'
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-between py-[2px] gap-3">
        <div className="flex items-start justify-between">
          <div className='flex flex-col '>

            <span className='text-textDark text-[14px] font-medium pt-1'>
              { productDetails?.titleName }
            </span>
          </div>
          <button 
            className={`${flexAllCenter}`}
            onClick={() => deleteProduct(productId)}
          >
            <i className="fa-solid fa-trash text-logOut mt-1"></i>
          </button>

        </div>

        <div className="flex items-center justify-between ">

          <div className="flex border border-[#c2c2c2]">

            <button 
              className={`${flexAllCenter} ${quantityButton}`} 
              onClick={() => decreaseProductCount(productId)}
              disabled={quantity <= 1} 
            >
              <i className=" fa-solid fa-minus"></i>
            </button>

            <span className='text-textDark px-3 border-l border-r border-[#c2c2c2]'>{quantity}</span>

            <button 
              className={`${flexAllCenter} ${quantityButton}`}
              onClick={() => increaseProductCount(productId)}
              disabled={quantity === productDetails?.stock}
            >
              <i className=" fa-solid fa-plus"></i>
            </button>

          </div>

          <div className="flex gap-2">
            <span className='text-text-blueClient font-medium text-[18px]'>S/{(productDetails?.price* quantity).toFixed(2)}</span>

          </div>
        </div>

      </div>





    </article>
  )
}

export default PreviewCartItem
