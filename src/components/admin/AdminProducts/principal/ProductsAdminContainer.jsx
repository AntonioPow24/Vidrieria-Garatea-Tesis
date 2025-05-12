import { useState } from "react"
import ProductsMain from "./main/ProductsMain"
import useSearchProduct from "../../../../hooks/productsHooks/useSearchProduct"
import ProductsFeatures from "./features/ProductsFeatures"
import { statusData } from "../../../../data/statusData"

const ProductsAdminContainer = () => {

    const allCategories = statusData.ALL_CATEGORIES
    const allActiveStatus = statusData.ALL_ACTIVE_STATUS

    const [categoryFilter, setCategoryFilter] = useState(allCategories)
    const [statusFilter, setStatusFilter] = useState(allActiveStatus)
  
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