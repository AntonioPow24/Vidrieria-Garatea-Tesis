import { useUserProductsContext } from "../../../../context/ProductsContext/UserProductsContext"
import ProductCard from "./ProductCard"

const ProductsContainer = () => {

    const { products } = useUserProductsContext()
    

  return (
    <section className='px-[65px] py-[54px] flex-1 580:px-[20px] max-h-[936px] overflow-y-auto containerProductsScroll'>
      
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

    </section>
  )
}

export default ProductsContainer
