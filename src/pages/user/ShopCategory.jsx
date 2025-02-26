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



  // Obtener el idCategory correspondiente al nameCategory
  const category = allCategories.find(c => c.nameCategory === categoryName);

  

  // Función para manejar el cambio de categoría (filtro)
  const handleChangeCategory = (categoryName) => {
    const selectedCategory = allCategories.find(c => c.nameCategory === categoryName);
    if (selectedCategory) {
      // Navegar a la nueva ruta de categoría
      navigate(`/tienda/${selectedCategory.nameCategory}`);
      setCurrentCategory(selectedCategory.idCategory);  // Actualizar la categoría en el contexto
    }
  };


  useEffect(() => {
    if (category) {
      
      // Seteamos el currentCategory, esto automaticamente en el context cambiara los productos
      setCurrentCategory(category.categoryId)

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
