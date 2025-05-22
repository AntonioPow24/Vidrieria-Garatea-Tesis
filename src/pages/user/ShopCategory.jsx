import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useUserProductsContext } from '../../context/ProductsContext/UserProductsContext'
import ShopHeader from '../../components/user/shop/container/ShopHeader'
import ShopAside from '../../components/user/shop/container/ShopAside'
import ProductsContainer from '../../components/user/shop/product/ProductsContainer'

const ShopCategory = () => {

  const {categoryName}  = useParams()

  const navigate = useNavigate()

  const { allCategories, setCurrentCategory } = useUserProductsContext()

  const category = Array.isArray(allCategories) && allCategories.find(c => c.nameCategory === categoryName);

  const handleChangeCategory = (categoryName) => {
    const selectedCategory = allCategories.find(c => c.nameCategory === categoryName);
    if (selectedCategory) {
      navigate(`/tienda/${selectedCategory.nameCategory}`);
      setCurrentCategory(selectedCategory.id);
    }
  };


  useEffect(() => {
    if (category) {
      
      setCurrentCategory(category.id)

    }
  }, [category, setCurrentCategory]);


  return (
    <section>
      
      <ShopHeader title={ category?.titleCategory } />

      <main className='flex bg-appBgBlack bigTablet:flex-col '>
            <ShopAside 
              changeCategory={ handleChangeCategory } 
              allCategories={ allCategories }
            />

            <ProductsContainer />
      </main>

    </section>
  )
}

export default ShopCategory
