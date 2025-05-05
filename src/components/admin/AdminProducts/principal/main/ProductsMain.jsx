import FilteredBar from "./FilteredBar"
import ContainerTable from "./table/ContainerTable"

const ProductsMain = ({ filteredProducts, categoryFilter, statusFilter, changeCategory, changeStatus }) => {

    return (
      <section className="bg-adminBgWhite dark:bg-appBgBlack transition-all duration-300 rounded-[6px] flex-1 flex flex-col ">
        <FilteredBar  changeCategory={ changeCategory } changeStatus={ changeStatus }  categoryfilter={ categoryFilter } statusFilter={ statusFilter } />
  
        <ContainerTable filteredProducts={ filteredProducts } />
  
  
  
      </section>
    )
  }
  
  export default ProductsMain