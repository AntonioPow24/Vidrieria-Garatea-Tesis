import { useUserProductsContext } from "../../../../context/ProductsContext/UserProductsContext"
import Loader from "../../../shared/Loader"
import LoaderBig from "../../../shared/LoaderBig"
import ProductCard from "./ProductCard"

const ProductsContainer = () => {

    const { products, isLoadingProducts } = useUserProductsContext()
    

  return (
    <section className='px-[30px] py-[54px] 1070:pt-0 1070:pb-[20px] flex-1 580:px-[20px] max-h-[936px]  containerProductsScroll'>
      {
        isLoadingProducts ?
          <Loader message={"Cargando productos"} />
        :
            Array.isArray(products) && products.length ? 
            <div className="containerProducts">
              {
                products?.map( product => 
                  <ProductCard 
                      key={ product.id} 
                      { ...product }  
                  />
                )
              }
            </div>
            :
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-text-white text-[16px] 648:text-[14px] leading-[24px] mt-[20px]">No hay productos para esta categoría</p>
            </div>
          }
    </section>
  )
}

export default ProductsContainer
