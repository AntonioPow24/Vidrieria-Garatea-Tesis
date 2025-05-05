import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { dataUsers } from '../../data/dataUsers';

const AdminUsersContext = createContext();

export const AdminUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const [selectedUserTable, setSelectedUserTable] = useState(null);
  const [loadingSelectedUser, setLoadingSelectedUser] = useState(false); // Estado para almacenar el usuario seleccionado

  // Obtener todos los usuarios
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/v1/users/admin', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setUsers(response.data); // Almacenar la lista de usuarios
    } catch (err) {
      setError('Error al obtener los usuarios');
    } finally {
      setLoading(false);
    }
  };

  // Obtener un usuario específico por ID (retorna los datos)
  const fetchUserById = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/v1/users/admin/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      return response.data; // Retorna la información del usuario
    } catch (err) {
      setError('Error al obtener el usuario');
      return null; // En caso de error, retornar null
    } finally {
      setLoading(false);
    }
  };

  // Eliminar un usuario por ID
  const deleteUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`/api/v1/users/admin/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      setError('Error al eliminar el usuario');
    } finally {
      setLoading(false);
    }
  };

  const selectUser = async (userId) => {
    // TODO: Descomentar codigo real, se esta realizando simulacion
    // setLoadingSelectedUser(true);
    // setError(null);
    // try {
    //   const user = await fetchUserById(userId);
    //   setSelectedUserTable(user);

    //   setTimeout(() => {
    //    setLoadingSelectedUser(false);
    //    }, 800);
    // } catch (err) {
    //   setError('Error al seleccionar el usuario');
    // }

    // Al realizar esta funcion, activaremos el loadingSelectedUser por 0.6s y despues mostraremos el usuario seleccionado
    setSelectedUserTable( users.find( user => user.userId === userId ))
    setLoadingSelectedUser(true);
    setTimeout(() => {
      setLoadingSelectedUser(false);
    }, 800); // Simulando un tiempo de carga de 0.6 segundos
    // Simulando la carga de un usuario seleccionado



  };


  // Usar useEffect para cargar los usuarios cuando el componente se monte
  useEffect(() => {
    // TODO: CODIGO DE PRUEBA, ELIMINAR DESPUES
    // fetchUsers();
    setUsers(dataUsers); // Inicializar con un array vacío para evitar errores en el renderizado

    if (dataUsers.length > 0) {
      setSelectedUserTable(dataUsers[0]);
    }
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
