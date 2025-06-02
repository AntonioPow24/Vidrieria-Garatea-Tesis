import { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { useRequestsContext } from '../../context/RequestContext';
import { useUserProductsContext } from '../../context/ProductsContext/UserProductsContext';
import { useNavigate } from 'react-router-dom';
import { getApiUrl } from '../../utils/getApiURL';

// TODO: EN LA CITY, YA NO MANDAMOS STRING, MANDAMOS CITYID

const useResumeRequest = () => {
  const { cart, setCart, total } = useCartContext();

  const { addRequest } = useRequestsContext();

  const { getProductDetails } = useUserProductsContext()

  const navigate = useNavigate()

  const [ allCities, setAllCities ] = useState([])

  // Datos para el pedido
  const [deliveryMethod, setDeliveryMethod] = useState('gratis');
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [city, setCity] = useState();
  const [dni, setDNI] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  // Validación de pedido
  const [isValidOrder, setIsValidOrder] = useState(false)

  // valores para el loading y error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  const apiUrl = getApiUrl();

  const isValidRequest = () => {

      const phoneNumberRegex = /^\d{9}$/;
      const dniRegex = /^\d{8}$/;
      
      const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);
      const isDniValid = dniRegex.test(dni);

      if( !isDniValid || !isPhoneNumberValid ) return false

      if (cart.length === 0) return false;
  
      // DEBE SER SOLO MENOR
      for (const item of cart) {
        const product = getProductDetails(item.id, true);
        if (product?.stock < item.quantity) {
          return false; // Si el stock es insuficiente, no es válido
        }
      }
  
      // Verificar si todos los campos requeridos están completos
      if (!dni || !phoneNumber || (deliveryMethod === 'domicilio' && !address)) {
        return false;
      }
  
      return true;
    };

    // cambio de metodo de Delivery
    const handleDeliveryChange = (method) => {
        setDeliveryMethod(method);
      if (method === 'gratis') {
        setDeliveryCost(0);
        setCity('');
        setAddress('');
        } else if (method === 'domicilio' && allCities.length > 0) {
            handleCityChange( allCities[0].id ) // default to Chimbote cost
      }
    };

  // Cambio de ciudad
  const handleCityChange = ( cityId ) => {
    setCity( cityId )
    verifyDeliveryCost()
  }

  // Verificar el costo de acuerdo a la ciudad
  const verifyDeliveryCost = () => {
    if( city === 1 ){
      setDeliveryCost( 20 )
    } else if( city === 2 ){
      setDeliveryCost( 10 )
    }
  }
  
  
  const handleGenerateOrder = async () => {
    if (!isValidOrder) {
      return;
    }

    setIsLoading(true);
    
    const newRequest = {
      deliveryMethod,
      dni,
      phoneNumber,
      cityId: deliveryMethod === 'gratis' ? null : city,
      address: deliveryMethod === 'gratis' ? null : address,
      priceDelivery: deliveryCost,
      orderItems: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };
    
    await addRequest(newRequest, navigate)
    localStorage.setItem("previewCart", JSON.stringify([]))
    setCart([]);

    setIsLoading(false);
  };
  
  useEffect(() => {
    verifyDeliveryCost()
  },[city])

  useEffect(() => {
    setIsValidOrder(isValidRequest());
  }, [cart, dni, phoneNumber, address, deliveryMethod]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${apiUrl}/city/list`);
        const data = await response.json();
        setAllCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  return {
    deliveryMethod,
    setDeliveryMethod,
    deliveryCost,
    setDeliveryCost,
    allCities,
    city,
    setCity,
    dni,
    setDNI,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    subTotalCart: total,
    isLoading,
    handleGenerateOrder,
    handleDeliveryChange,
    handleCityChange,
    isValidOrder,
    error
  };
};

export default useResumeRequest;