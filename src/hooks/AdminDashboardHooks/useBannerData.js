import { useEffect, useState } from "react";
import { getBannerData } from "../../utils/dashboardFunctions";

export const useBannerData = (interval = 60000) => {
  const [bannerData, setBannerData] = useState(getBannerData());

  useEffect(() => {
    const updateBanner = () => setBannerData(getBannerData());
    const intervalId = setInterval(updateBanner, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return bannerData;
};