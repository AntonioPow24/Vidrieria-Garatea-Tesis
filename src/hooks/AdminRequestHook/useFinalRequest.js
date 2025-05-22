import { useAdminRequestContext } from "../../context/AdminRequestContext/AdminRequestContext";
import useLocationFilter from "./useLocationFilter";
import useMonthFilter from "./useMonthFilter";
import useOrderListFilter from "./useOrderListFilter";
import useSearchRequest from "./useSearchRequest";
import useStatusFilter from "./useStatusFilter";

const useFinalRequest = () => {
  const {
    requests,
    activeStatus,
    activeLocation,
    searchQuery,
    selectedMonth,
    orderType,
  } = useAdminRequestContext();

  const statusFiltered = useStatusFilter(requests, activeStatus);
  const locationFiltered = useLocationFilter(statusFiltered, activeLocation);
  const searchFiltered = useSearchRequest(locationFiltered, searchQuery);
  const monthFiltered = useMonthFilter(searchFiltered, selectedMonth);
  const finalList = useOrderListFilter(monthFiltered, orderType);

  return finalList;
};

export default useFinalRequest;