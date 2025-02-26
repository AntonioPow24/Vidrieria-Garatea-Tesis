import React from 'react'
import { useUserProductsContext } from '../../../../context/ProductsContext/UserProductsContext'

const ShopCategoryFilter = ({ categoryId, nameCategory, titleCategory, changeCategory }) => {

    const { currentCategory } = useUserProductsContext()

  return (
    <div 
      className={`px-[20px] py-[20px]  border-b border-appBgBlack hover:bg-[#54c0e1a6] categoryFilter ${categoryId === currentCategory ? 'bg-[#54c0e1a6]' : 'bg-[#171717dc]' } transition-all duration-300 tablet:min-w-[200px] tablet:flex tablet:justify-center tablet:items-center tablet:text-center  tablet:rounded-[6px] smallTablet:min-w-[150px]`}
      onClick={ () => changeCategory( nameCategory ) }
    >
        <span 
            className={` capitalize text-xl cursor-pointer categoryFilterSpan transition-all duration-300 ${categoryId === currentCategory ? 'text-textDark' : 'text-text-white'  } smallTablet:text-[14px]`}
        >
            { titleCategory }
        </span>
    </div>
  )
}

export default ShopCategoryFilter
