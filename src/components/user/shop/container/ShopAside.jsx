import React from 'react'
import ShopSearchProduct from './ShopSearchProduct'
import ShopCategoryFilter from './ShopCategoryFilter'


const ShopAside = ({ changeCategory, allCategories }) => {



    const searhStyle = 'flex gap-3 items-center rounded-[6px] max-w-[542px] w-full h-[42px] bg-adminBgWhite px-[10px] transition-all duration-300'

    return (
      <aside className=' py-[26px] flex flex-col gap-[40px] bg-[#232323] max-w-[480px] w-full  bigTablet:max-w-full overflow-hidden'>
        
        <div className="flex gap-4 px-[16px] items-center bigTablet:justify-center">
  
          <ShopSearchProduct  containerStyle={ searhStyle } />
        </div>
  
  
        <div className='flex flex-col tablet:flex-row tablet:gap-4 tablet:overflow-x-auto filterCategoriesScroll'>
          {
            allCategories.map( category => 
              <ShopCategoryFilter 
                { ...category } 
                key={ category.categoryId }  
                changeCategory={ changeCategory } 
              /> )
          }
        </div>
  
      </aside>
    )
}

export default ShopAside
