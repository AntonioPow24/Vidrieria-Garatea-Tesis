import { useMemo } from "react";

const useMonthFilter = (requests, month) => {
  return useMemo(() => {
    if (!month && month !== 0) return requests;
    return requests.filter(req => {
      const date = new Date(req.createdDate);
      return date.getMonth() === month; // month: 0=Ene, 1=Feb, ...
    });
  }, [requests, month]);
};

export default useMonthFilter;