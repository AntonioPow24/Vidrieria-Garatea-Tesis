import { useMemo } from "react";

const useOrderListFilter = (requests, orderType) => {
  return useMemo(() => {
    const safeRequests = Array.isArray(requests) ? requests : [];
    let sorted = [...safeRequests];
    switch (orderType) {
      case "recientes":
        sorted.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        break;
      case "mayorPrecio":
        sorted.sort((a, b) => b.totalOrder - a.totalOrder);
        break;
      case "menorPrecio":
        sorted.sort((a, b) => a.totalOrder - b.totalOrder);
        break;
      case "antiguos":
        sorted.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
        break;
      default:
        break;
    }
    return sorted;
  }, [requests, orderType]);
};

export default useOrderListFilter;