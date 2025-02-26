import React from 'react'
import { useUserProductsContext } from '../../../../context/ProductsContext/UserProductsContext';

const ShopSearchProduct = ({ containerStyle }) => {

    const { searchQuery, setSearchQuery } = useUserProductsContext();

    // Cuando el usuario escribe en el input, actualizamos el searchQuery
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);  // Actualiza el valor de búsqueda
    };

  return (
    <div className={ containerStyle }>
      <i className="fa-solid fa-magnifying-glass text-[22px] text-adminTextWhite dark:text-adminTextWhite transition-all duration-300"></i>

      <input 
      type="text" 
      className="h-full w-full border-none bg-transparent outline-none text-adminTextDark  text-xl transition-all duration-300"
      placeholder="Buscar producto por nombre"
      value={ searchQuery }
      onChange={ handleSearch }
      />
    </div>
  )
}

export default ShopSearchProduct
