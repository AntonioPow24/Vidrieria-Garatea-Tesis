import { useState } from "react"
import ProductsMain from "./main/ProductsMain"
import useSearchProduct from "../../../../hooks/productsHooks/useSearchProduct"
import ProductsFeatures from "./features/ProductsFeatures"

const ProductsAdminContainer = () => {

    const [categoryFilter, setCategoryFilter] = useState(99)
    const [statusFilter, setStatusFilter] = useState(1)
  
    const changeCategory = ( newCategory ) => setCategoryFilter( newCategory )
    const changeStatus = ( newStatus ) => setStatusFilter( newStatus )
  
    const { query, handleSearch, filteredProducts } = useSearchProduct( categoryFilter, statusFilter )
  
    return (
      <section className="px-[24px] py-[24px] flex flex-col gap-[22px] flex-1">
        <ProductsFeatures query={ query } handleSearch={ handleSearch } />
  
        <ProductsMain  
          filteredProducts={ filteredProducts } 
          categoryFilter={ categoryFilter } 
          statusFilter={ statusFilter } 
          changeCategory={ changeCategory }
          changeStatus={ changeStatus } 
        />
      </section>
    )
  }
  
  export default ProductsAdminContainer