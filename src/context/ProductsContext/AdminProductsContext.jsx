import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { dataProducts } from '../../data/dataProducts';

const AdminProductsContext = createContext();

export const AdminProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener todos los productos del backend
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/products', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
      const response = await axios.post('/api/products', productData, {
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
      const response = await axios.put(`/api/products/${productId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setProducts((prev) =>
        prev.map((product) =>
          product.productId === productId ? { ...product, ...updatedData } : product
        )
      );
    } catch (err) {
      setError('Error al editar el producto');
    }
  };

  // Eliminar un producto
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setProducts((prev) => prev.filter((product) => product.productId !== productId));
    } catch (err) {
      setError('Error al eliminar el producto');
    }

  };

  const getProductDetailsById = (productId) => {
    const product = products.find((product) => product.productId === productId);
    return product ? { ...product } : null;
  }

  useEffect(() => {
    //TODO realizar fetch
    // fetchProducts();
    setProducts(dataProducts)
  }, []);

  return (
    <AdminProductsContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        editProduct,
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