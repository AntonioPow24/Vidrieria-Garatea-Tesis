import { useState } from "react"
import ProductSearch from "./ProductSearch"
import Modal from "../../../../shared/Modal"
import AddProductForm from "../../formProducts/AddProductForm"

const ProductsFeatures = ({ query, handleSearch }) => {

    // Estado para el Modal de agregar Producto
    const [isProductModal, setIsProductModal] = useState( false )
    // const [ dataForm, setDataForm ] = useState( {
    //   titleForm : '',
    //   buttonForm : '',
    //   methodForm : '',
    // } )
  
  
  
    // Funciones
    const toggleProductModal = (  ) => setIsProductModal( prev => !prev ) 
    
  
  
    const searchStyle = "flex gap-3 items-center rounded-[6px] max-w-[542px] w-full h-[42px] bg-adminBgWhite px-[10px] dark:bg-appBgBlack transition-all duration-300"
  
    
    
  
    return (
      <div className='h-[42px] flex items-center justify-between '>
        <ProductSearch containerStyle={ searchStyle } query={ query } handleSearch={ handleSearch } />
  
        <div className="flex h-full gap-[30px] items-center flex-1 justify-end">
  
          <button
              className={'rounded-[6px] bg-dashboardPurpleBg h-full max-w-[203px] w-full hover:bg-[#6d4bca]  dark:bg-[#eee] dark:hover:bg-[#fafafa] transition-all duration-300'}
              onClick={ () => toggleProductModal() }
          >
              <span className='text-text-white dark:text-dashboardPurpleBg text-xl'>Nuevo Producto</span>
          </button>
  
        </div>
  
        {
           isProductModal  && 
              <Modal 
                isModal={ isProductModal }
                toggleModal={ toggleProductModal }
                anotherClass=' flex justify-center items-center '
              >
                
                <AddProductForm 
                  methodForm={ 'agregar' }
                />
  
              </Modal>
        }
      </div>
    )
  }
  
  export default ProductsFeatures