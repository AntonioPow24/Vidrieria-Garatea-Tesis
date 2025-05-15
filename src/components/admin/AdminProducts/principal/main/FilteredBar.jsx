

import { useAdminProductsContext } from "../../../../../context/ProductsContext/AdminProductsContext";
import DropDownList from "./DropDownList";


const FilteredBar = ({ changeCategory, categoryfilter, changeStatus, statusFilter }) => {

    const { allCategories } = useAdminProductsContext()   


    return (
      <div className="px-[22px] py-[22px] flex gap-6">
          <div className="flex items-center gap-2">
              <i className="fa-solid fa-filter text-adminTextDark dark:text-adminTextWhite transition-all duration-300"></i>
              <span className="text-adminTextDark dark:text-adminTextWhite transition-all duration-300">Filtrar por:</span>
          </div>
  
          <DropDownList 
            changeFunction={ changeCategory } 
            optionsArray={[
              {id: 99, option:'Todas las categorías'},
              ...allCategories
                .map(({id, titleCategory}) => ({id, option: titleCategory}
              ))] }
            titleButton={ categoryfilter === 99 ? 'Todas las categorías' : allCategories.find( category => category.id === categoryfilter ).titleCategory }
            sectionMode={ 'yesId' } 
          />
          
          <DropDownList 
            changeFunction={ changeStatus } 
            optionsArray={ [
              {id: 1, option:'habilitado'}, 
              {id: 0, option: 'deshabilitado'}
            ]} 
            titleButton={ statusFilter === 1 ? 'Habilitados' : 'Deshabilitados' }
            sectionMode={ 'yesId' } 
          />
  
      </div>
    )
  }
  
  export default FilteredBar