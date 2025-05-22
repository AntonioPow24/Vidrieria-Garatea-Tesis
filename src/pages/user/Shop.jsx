import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { categoryProducts } from '../../data/categoryProducts';
import { useUserProductsContext } from '../../context/ProductsContext/UserProductsContext';

const Shop = () => {

  const navigate = useNavigate();


  const { allCategories } = useUserProductsContext()


  //Todo Modificar el useEFFECT, usar allCategories en vez de CategroyProducts
  useEffect(() => {
    // Redirigir al primer producto de la lista de categorías si está disponible
    // if (allCategories.length > 0) {
    if (Array.isArray(allCategories) && allCategories.length > 0 && allCategories[0]?.nameCategory) {
      navigate(`/tienda/${allCategories[0].nameCategory}`)
    }
  }, [allCategories, navigate])

  return null;
}

export default Shop
