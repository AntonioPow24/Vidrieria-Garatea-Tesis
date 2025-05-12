import { useState } from "react"
import { useAdminProductsContext } from "../../../../../../context/ProductsContext/AdminProductsContext"
import useModal from "../../../../../../hooks/modalHooks/useModal"
import Modal from "../../../../../shared/Modal"
import AddProductForm from "../../../formProducts/AddProductForm"


const ProductTRCard = ({productId, titleName, categoryId, valorization, stock, status, price,imageUrl  }) => {


    const { deleteProduct, allCategories } = useAdminProductsContext()
    
    const { isModalOpen, toggleModal } =useModal()


  return (
    <>
        <tr className='border-y-2  border-[#A3A3A34F] max-h-[64px] hover:bg-[#e4e4e4] dark:hover:bg-[#303030]  transition-all duration-300'>

            <td className='text-center w-[70px]'>
                <span className='text-base text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>{ productId }</span> 
            </td>

            <td className='flex items-center justify-start gap-2'>
                <div className="max-w-[30px] flex items-center">
                    <img src={ imageUrl } alt="" />
                </div>
                <h3 className='text-base text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>{ titleName }</h3>
            </td>

            <td className='text-center'>
                <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>
                    { allCategories.find( category => category.id === categoryId ).titleCategory }
                </span>
            </td>

            <td className='text-center'>
                <div className="">
                    <p 
                        className='text-adminTextPurple font-bold text-xl flex justify-center items-center gap-2 cursor-default'
                    >
                        { valorization } 
                        <i className="fa-solid fa-cart-shopping pt-1"></i>
                    </p>
                </div>
            </td>

            <td>
                <div className="">
                    <p 
                        className='text-[#e7bc2e] dark:text-[#bea032] transition-all duration-300 font-bold text-xl flex justify-center items-center gap-2 cursor-default'
                    >
                        { stock } 
                        <i className="fa-solid fa-box-open pt-1"></i>
                    </p>
                </div>
            </td>

            <td className='text-center'>
                <div>
                    <span 
                        className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-xl cursor-default'
                    >
                        S/{price.toFixed(2)}
                    </span>
                </div>
            </td>

            <td className='text-center'>
                <div>
                    <span 
                        className={`text-center capitalize font-medium 
                        ${ status === 1? 'text-success' : 'text-logOut' } transition-all duration-300 text-xl cursor-default`}
                    >
                        { status === 1 ? 'Habilitado' : 'Deshabilitado' }
                    </span>
                </div>
            </td>

            <td>
                <div>
                    <div className="flex justify-center gap-5">
                        <button
                            className={`flex justify-center items-center`}
                            onClick={ toggleModal }
                        >
                            <i className="fa-solid fa-pen-to-square text-2xl text text-adminTextDark dark:text-textWhiteTransparent font-thin transition-all duration-300"></i>
                        </button>

                        <button
                            className={`flex justify-center items-center`}
                            onClick={ () => deleteProduct( productId ) }
                        >
                            <i className="fa-solid fa-trash text-2xl text text-logOut  transition-all duration-300"></i>
                        </button>
                    </div>
                </div>
            </td>
            
        </tr>
            <Modal
                toggleModal={toggleModal}
                isModal={isModalOpen}
                anotherClass="w-[100%] h-[100%] flex items-center justify-center"
            >
                <AddProductForm 
                    methodForm={'editar'}
                    productId={ productId }
                />
            </Modal>
    </>
  )
}

export default ProductTRCard