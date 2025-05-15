import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { dataProducts } from '../../data/dataProducts';

const AdminProductsContext = createContext();

export const AdminProductsProvider = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener todos los productos del backend
  const fetchProducts = async () => {
    const token = localStorage.getItem('authToken');

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://apiorders.somee.com/api/v1/product/admin", 
        {
          headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (err) {
      setError('Error al obtener los productos');
    } finally {
      setLoading(false);
    }
  };

  // Agregar un nuevo producto
  const addProduct = async (productData) => {
    try {
      const response = await axios.post('http://apiorders.somee.com/api/v1/product/create', 
        productData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setProducts((prev) => [...prev, response.data]);
    } catch (err) {
      setError('Error al agregar el producto');
    }
  };

  // Editar un producto
  const editProduct = async (productId, updatedData) => {
    
    try {
      const response = await axios.put(`http://apiorders.somee.com/api/v1/product/update`, 
        updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      
      setProducts((prev) =>
        prev.map((product) =>
          product.id === productId ? { ...product, ...response.data } : product
        )
      );
    } catch (err) {
      
      setError('Error al editar el producto');
    }
  };

  // 
  const updateProductStatus = async (productId, statusToUpdate) => {
    
    try {
      const response = await axios.delete(`http://apiorders.somee.com/api/v1/product/${productId}`, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })

      setProducts((prev) =>
        prev.map((product) =>
            product.id === productId ? { ...product, status: statusToUpdate } : product
          )
      );
    } catch (err) {
      setError('Error al cambiar el estado del producto');
    }
  }

  // Eliminar un producto
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setProducts((prev) => prev.filter((product) => product.id !== productId));
    } catch (err) {
      setError('Error al eliminar el producto');
    }

  };

  const getProductDetailsById = async (productId) => {
    try {
      const response = await axios.get(`http://apiorders.somee.com/api/v1/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      return response.data;
    } catch (err) {
      setError('Error al obtener los detalles del producto');
      return null;
    }
  }

  const fetchCategories = async () => {
    try{
      const response = await axios.get('http://apiorders.somee.com/api/v1/category/list');
      const data = await response.data;
      setAllCategories(data);
    } catch(err){
      console.error('Error fetching categories:', err);
    }
  };


  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {

    fetchProducts();
    // setProducts(dataProducts)
  }, []);

  return (
    <AdminProductsContext.Provider
      value={{
        products,
        allCategories,
        loading,
        error,
        addProduct,
        editProduct,
        updateProductStatus,
        deleteProduct,
        fetchProducts,
        getProductDetailsById,
      }}
    >
      {children}
    </AdminProductsContext.Provider>
  );
};

export const useAdminProductsContext = () => useContext(AdminProductsContext);