
import { useEffect, useState } from 'react';
import { useCartContext } from '../../../context/CartContext'
import { useUserProductsContext } from '../../../context/ProductsContext/UserProductsContext'
import Loader from '../../shared/Loader';



const PreviewCartItem = ({classComponent,id, quantity}) => {

  const { getProductDetails } = useUserProductsContext()

  const { increaseProductCount, decreaseProductCount, deleteProduct } = useCartContext()
  
  const [ productDetails, setProductDetails ] = useState(null)
  const [ isLoadingDetails, setIsLoadingDetails ] = useState(false)

  
  
  useEffect(() => {
    if (!id) return;

    const fetchDetails = async () => {
      setIsLoadingDetails(true);
      try {
        const details = await getProductDetails(id, true);
        console.log(details);
        
        setProductDetails(details);
        
      } catch (error) {
        console.error("Error al obtener los detalles del producto:", error);
      } finally {
        setIsLoadingDetails(false);
      }
    };
    
    fetchDetails();

  }, [id, quantity]);
  
  
  const { images, titleName, price, stock  } = productDetails || {}

  // Estilos para el maquetado
  const flexAllCenter = 'flex items-center justify-center'
  const quantityButton = 'px-3 transition-all duration-300 text-text-blueClient hover:text-text-white hover:bg-text-blueClient'

  return (
    <article className={`${classComponent} flex gap-5 previewCartItem h-[120px]`}>
      {
        isLoadingDetails || !productDetails ?
          <Loader mode="dark" message={"Cargando item"} />
        :
        <>
          <div className={`${flexAllCenter} max-w-[90px] w-full p-1`}>

            <div className='w-full h-full flex justify-center items-center'>
              <img 
                src={ images?.length && images[0].url } 
                alt={ titleName } 
                className=' h-full'
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-between py-[2px] gap-3">
            <div className="flex items-start justify-between">
              <div className='flex flex-col '>

                <span className='text-textDark text-[14px] font-medium pt-1'>
                  { titleName }
                </span>
              </div>
              <button 
                className={`${flexAllCenter}`}
                onClick={() => deleteProduct(id)}
              >
                <i className="fa-solid fa-trash text-logOut mt-1"></i>
              </button>

            </div>

            <div className="flex items-center justify-between ">

              <div className="flex border border-[#c2c2c2]">

                <button 
                  className={`${flexAllCenter} ${quantityButton}`} 
                  onClick={() => decreaseProductCount(id)}
                  disabled={quantity <= 1} 
                >
                  <i className=" fa-solid fa-minus"></i>
                </button>

                <span className='text-textDark px-3 border-l border-r border-[#c2c2c2]'>{quantity}</span>

                <button 
                  className={`${flexAllCenter} ${quantityButton}`}
                  onClick={() => increaseProductCount(id)}
                  disabled={quantity === stock}
                >
                  <i className=" fa-solid fa-plus"></i>
                </button>

              </div>

              <div className="flex gap-2">
                <span className='text-text-blueClient font-medium text-[18px]'>S/{(price* quantity).toFixed(2)}</span>

              </div>
            </div>

          </div>
        </>
      }
    </article>
  )
}

export default PreviewCartItem
