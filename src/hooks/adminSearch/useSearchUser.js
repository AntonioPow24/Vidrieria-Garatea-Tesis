import { useEffect, useState } from "react";
import { useAdminUsersContext } from "../../context/AdminUsersContext/AdminUsersContext";

const useSearchUser = () => {
  const { users } = useAdminUsersContext();  // Suponiendo que tienes este contexto
  const [query, setQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (users && users.length > 0) {
      const filterUsers = () => {
        return users.filter(  user => {
            const matchesQuery = user.userName.toLowerCase().includes(query.toLowerCase()) || 
            user.email.toLowerCase().includes(query.toLowerCase()) ||
            user.lastName.toLowerCase().includes(query.toLowerCase());


          return matchesQuery;
        });
      };
      setFilteredUsers(filterUsers());
    }
  }, [query, users]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return { query, handleSearch, filteredUsers };
};

export default useSearchUser;
