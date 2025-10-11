import { useMemo } from "react";

const useLocationFilter = (requests, activeLocation) => {

  return useMemo(() => {
    if (activeLocation === null || activeLocation === undefined) return requests;

    return requests?.filter(req => req.cityId === activeLocation);
  }, [requests, activeLocation]);
};

export default useLocationFilter;