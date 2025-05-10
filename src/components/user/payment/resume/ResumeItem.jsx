import React, { useEffect, useState } from 'react'
import { useUserProductsContext } from '../../../../context/ProductsContext/UserProductsContext'
import { useCartContext } from '../../../../context/CartContext'

const ResumeItem = ({ id, quantity }) => {

    const { getProductDetails } = useUserProductsContext()


    // Destructuracion del CartContext
    const { increaseProductCount, decreaseProductCount, deleteProduct } = useCartContext()

     const [ productDetails, setProductDetails ] = useState(null)
    
      useEffect(() => {
        if (!id) {
          return;
        }
        const fetchDetails = async () => {
          try {
            const details = await getProductDetails(id, true);
            setProductDetails(details);
            
          } catch (error) {
            console.error("Error al obtener los detalles del producto:", error);
          }
        };
        
        fetchDetails();
    
      }, [id, getProductDetails]);

// TODO ARREGLAR EL SIMBOLO, DEBE SER MAYOR O IGUAL

  return (
    <article className='flex gap-[40px] border-b border-textWhiteTransparent 290 py-[20px] justify-between 580:flex-col 580:gap-[6px] '>
      <div className='flex gap-[20px] min-w-[340px] 580:max-w-full 580:min-w-[200px] 580:gap-[10px]'>
            <div className='w-[118px] h-[100px] flex justify-center bg-appBgBlack rounded-[6px] py-[4px] 580:h-[90px] 580:w-[106px]'>
                <img 
                src={ productDetails?.images?.length && productDetails.images[0].url }   
                alt={ productDetails?.titleName } 
                className=' h-full'
                />
            </div>

            <div className='flex flex-col justify-center gap-[10px]'>
                <span className='text-text-white text-[14px] 580:text-[12px]'>{ productDetails?.titleName }</span>

                <div className='flex gap-[8px] items-center'>
                    <span className='text-text-white text-[13px]'>S/. { productDetails?.price.toFixed(2) } x und</span>

                    <div className='flex justify-start items-center border-l border-textWhiteTransparent pl-[8px]'>
                        <span className='flex gap-[6px] items-center text-[14px] text-text-white'>
                        { productDetails?.stock >= quantity ?
                            <>
                                en Stock 
                                <i className="fa-solid fa-circle-check text-[14px] text-success"></i>
                            </> 
                             :  
                            <>
                                <span className='text-logOut'>sin stock, reducir cantidad o eliminar</span>
                                <i className="fa-solid fa-circle-xmark text-[14px] text-logOut"></i>
                            </>
                        } 
                        </span>
                    </div>
                </div>
                
                <div className=' flex w-full justify-start items-center gap-[14px]'>
                    <button 
                        className='flex justify-center items-center cursor-pointer'
                        onClick={ () => decreaseProductCount(id) }
                        disabled={quantity <= 1}     
                    >
                        <i className="fa-solid fa-minus text-skyBlueApp text-[18px]"></i>
                    </button>

                    <div className='flex justify-center items-center'>
                        <span className='text-text-white text-[18px]'>
                            { quantity }
                        </span>
                    </div>

                    <button 
                        className='flex justify-center items-center cursor-pointer'
                        onClick={ () => increaseProductCount(id) }
                        disabled={quantity === productDetails?.stock}    
                    >
                        <i className="fa-solid fa-plus text-skyBlueApp text-[18px]"></i>
                    </button>
                </div>
            </div>
      </div>
    
    {/* PRECIO TOTAL DEL ITEM E ELIMINAR */}
      <div className='flex flex-col justify-between 580:flex-row-reverse'>
            <div className='w-full flex justify-center items-center 580:justify-end'>
                <span className='text-[20px] text-text-white font-medium min-w-[80px]'>S/. {( productDetails?.price * quantity).toFixed(2) }</span>
            </div>
            <div className='w-full flex justify-center items-center 580:justify-start'>
                <button 
                    className='flex justify-center items-center gap-2'
                    onClick={ () => deleteProduct(id) }
                >
                    <span className='text-[14px] text-logOut'>Eliminar</span>
                    <i className="fa-solid fa-trash text-logOut text-[12px] 580:text-[10px] 580:pt-[3px]"></i>
                </button>
            </div>
      </div>
    </article>
  )
}

export default ResumeItem
