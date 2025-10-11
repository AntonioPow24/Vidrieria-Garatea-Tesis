import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { dataUsers } from '../../data/dataUsers';
import { getApiUrl } from '../../utils/getApiURL';

const AdminUsersContext = createContext();


export const AdminUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const [selectedUserTable, setSelectedUserTable] = useState(null);
  const [loadingSelectedUser, setLoadingSelectedUser] = useState(false);

  const fetchUsers = async () => {
    const apiUrl = getApiUrl();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${apiUrl}/user/paginationAdmin`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setUsers(response.data);
      if (response.data.length > 0) {
        const firstUser = await fetchUserById(response.data[0].id);
        setSelectedUserTable(firstUser);
      }
    } catch (err) {
      setError('Error al obtener los usuarios');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserById = async (id) => {
    const apiUrl = getApiUrl();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${apiUrl}/user/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      
      return response.data;
    } catch (err) {
      setError('Error al obtener el usuario');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`/api/v1/users/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setUsers((prevUsers) => prevUsers?.filter((user) => user.id !== id));
    } catch (err) {
      setError('Error al eliminar el usuario');
    } finally {
      setLoading(false);
    }
  };

  const selectUser = async (id) => {
     setLoadingSelectedUser(true);
     setError(null);
     try {
       const user = await fetchUserById(id);
       setSelectedUserTable(user);

       setTimeout(() => {
       setLoadingSelectedUser(false);
        }, 800);
     } catch (err) {
       setError('Error al seleccionar el usuario');
     }

  };


  useEffect(() => {
     fetchUsers();
  }, []);

  return (
    <AdminUsersContext.Provider
      value={{
        users,
        selectedUserTable,
        loading,
        loadingSelectedUser,
        error,
        fetchUsers,
        fetchUserById,
        deleteUser,
        selectUser,
      }}
    >
      {children}
    </AdminUsersContext.Provider>
  );
};

export const useAdminUsersContext = () => useContext(AdminUsersContext);
