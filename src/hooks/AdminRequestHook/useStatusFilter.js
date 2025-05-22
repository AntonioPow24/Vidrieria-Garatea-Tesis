import { useMemo } from "react";

const useStatusFilter = (requests, activeStatus) => {
  return useMemo(() => {
    if (activeStatus === null || activeStatus === undefined) return requests;
    
    return requests.filter(req => req.status === activeStatus);
  }, [requests, activeStatus]);
};

export default useStatusFilter;