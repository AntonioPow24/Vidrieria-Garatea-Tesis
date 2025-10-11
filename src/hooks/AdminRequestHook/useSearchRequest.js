import { useEffect, useMemo, useState } from "react";
import { useAdminRequestContext } from "../../context/AdminRequestContext/AdminRequestContext";
import { useAdminUsersContext } from "../../context/AdminUsersContext/AdminUsersContext";

const useSearchRequest = (requests, query) => {
  const { users } = useAdminUsersContext();

  return useMemo(() => {
    if (!query) return requests;
    return requests?.filter(req => {
      const user = Array.isArray(users) && users.find(u => u.id === req.userId);
      const userName = user ? user.userName : "";
      return (
        userName.toLowerCase().includes(query.toLowerCase()) ||
        req.dni?.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [requests, query, users]);
};


export default useSearchRequest;