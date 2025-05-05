import { useEffect, useState } from "react"
import { useAdminProductsContext } from "../../context/ProductsContext/AdminProductsContext"


const useSearchProduct = (categoryFilter,statusFilter) => {

    const { products } = useAdminProductsContext()
    const [query, setQuery] = useState('')
    const [filteredProducts, setFilteredProducts] = useState( products )


    useEffect(() => {    
        
        if (products && products.length > 0) {

          console.log(products);
          

          const filterProducts = () => {
              return products.filter(product => {
                  const matchesQuery = product.titleName.toLowerCase().includes(query.toLowerCase());
                  
                  const matchesCategory = categoryFilter === 'todos' || product.category === categoryFilter;

                  console.log(categoryFilter);
                  
                  
                  const matchesStatus = statusFilter === 'todos' || product.isAvailable === statusFilter;

                  return matchesQuery && matchesCategory && matchesStatus;
              });
          };

          setFilteredProducts(filterProducts());
        }
    
      }, [query, categoryFilter, statusFilter, products]);


    const handleSearch = ( e ) => {
        const newQuery = e.target.value
        
        setQuery( newQuery )

    }



    return { query, handleSearch, filteredProducts }
}

export default useSearchProduct


