import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { width, isMobile: width <= 850 };
};

export default useWindowSize;