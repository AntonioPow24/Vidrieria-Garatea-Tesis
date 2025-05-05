
import { categoryProducts } from "../../../../../data/categoryProducts";
import DropDownList from "./DropDownList";


const FilteredBar = ({ changeCategory, categoryfilter, changeStatus, statusFilter }) => {


    return (
      <div className="px-[22px] py-[22px] flex gap-6">
          <div className="flex items-center gap-2">
              <i className="fa-solid fa-filter text-adminTextDark dark:text-adminTextWhite transition-all duration-300"></i>
              <span className="text-adminTextDark dark:text-adminTextWhite transition-all duration-300">Filtrar por:</span>
          </div>
  
          <DropDownList changeFunction={ changeCategory } optionsArray={ ['todos',...categoryProducts.map(item => item.titleCategory)] } titleButton={ categoryfilter === 'todos'? 'Todas las categorías' : categoryfilter } />
          
          <DropDownList changeFunction={ changeStatus } optionsArray={ ['habilitado', 'deshabilitado'] } titleButton={ statusFilter ? 'Habilitados' : 'Deshabilitados' } />
  
      </div>
    )
  }
  
  export default FilteredBar