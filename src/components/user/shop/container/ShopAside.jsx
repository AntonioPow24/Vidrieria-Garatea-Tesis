import React from 'react'
import ShopSearchProduct from './ShopSearchProduct'
import ShopCategoryFilter from './ShopCategoryFilter'


const ShopAside = ({ changeCategory, allCategories }) => {



    const searhStyle = 'flex gap-3 items-center rounded-[6px] w-full h-[42px] bg-adminBgWhite px-[10px] transition-all duration-300'

    return (
      <aside className=' py-[26px] flex flex-col gap-[20px] bg-[#232323] bigTablet:max-w-full overflow-hidden'>
        
        <div className="flex gap-4 px-[16px] items-center bigTablet:justify-center">
  
          <ShopSearchProduct  containerStyle={ searhStyle } />
        </div>
  
  
        <div className='flex flex-col tablet:flex-row tablet:gap-4 tablet:overflow-x-auto filterCategoriesScroll min-w-[400px] 950'>
          {
            allCategories.map( category => 
              <ShopCategoryFilter 
                { ...category } 
                key={ category.id }  
                changeCategory={ changeCategory } 
              /> )
          }
        </div>
  
      </aside>
    )
}

export default ShopAside
