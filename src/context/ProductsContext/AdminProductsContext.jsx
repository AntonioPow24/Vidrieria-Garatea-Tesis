import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { dataProducts } from '../../data/dataProducts';
import { getApiUrl } from '../../utils/getApiURL';

const AdminProductsContext = createContext();

export const AdminProductsProvider = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener todos los productos del backend
  const fetchProducts = async () => {
    const token = localStorage.getItem('authToken');
    const apiUrl = getApiUrl();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${apiUrl}/product/admin`, 
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
    const apiUrl = getApiUrl();
    try {
      const response = await axios.post(`${apiUrl}/product/create`, 
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
    const apiUrl = getApiUrl();
    try {
      const response = await axios.put(`${apiUrl}/product/update`, 
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
    const apiUrl = getApiUrl();
    try {
      const response = await axios.delete(`${apiUrl}/product/${productId}`, 
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
    const apiUrl = getApiUrl();
    try {
      const response = await axios.get(`${apiUrl}/product/${productId}`, {
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
    const apiUrl = getApiUrl();
    try{
      const response = await axios.get(`${apiUrl}/category/list`);
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