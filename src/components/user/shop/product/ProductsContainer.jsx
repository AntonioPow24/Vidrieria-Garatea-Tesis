import { useUserProductsContext } from "../../../../context/ProductsContext/UserProductsContext"
import Loader from "../../../shared/Loader"
import LoaderBig from "../../../shared/LoaderBig"
import ProductCard from "./ProductCard"

const ProductsContainer = () => {

    const { products, isLoadingProducts } = useUserProductsContext()
    

  return (
    <section className='px-[65px] py-[54px] flex-1 580:px-[20px] max-h-[936px] overflow-y-auto containerProductsScroll'>
      {
        isLoadingProducts ?
          <Loader message={"Cargando productos"} />
        :
        <div className="containerProducts">
          {
            Array.isArray(products) && products?.map( product => 
              <ProductCard 
                  key={ product.id} 
                  { ...product }  
              />
            )
          }
        </div>
      }

    </section>
  )
}

export default ProductsContainer
