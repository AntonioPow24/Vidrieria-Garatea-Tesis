import { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { useRequestsContext } from '../../context/RequestContext';
import { useUserProductsContext } from '../../context/ProductsContext/UserProductsContext';
import { useNavigate } from 'react-router-dom';

// TODO: EN LA CITY, YA NO MANDAMOS STRING, MANDAMOS CITYID

const useResumeRequest = () => {
  const { cart } = useCartContext();

  const { addRequest } = useRequestsContext();

  const { total } = useCartContext()

  const { getProductDetails } = useUserProductsContext()

  const navigate = useNavigate()


  const [deliveryMethod, setDeliveryMethod] = useState('gratis');
  const [deliveryCost, setDeliveryCost] = useState(0); // Delivery cost
  const [city, setCity] = useState(); // Delivery city
  const [dni, setDNI] = useState(''); // DNI input
  const [phoneNumber, setPhoneNumber] = useState(''); // Phone number input
  const [address, setAddress] = useState(''); // Address input (optional)
  const [isValidOrder, setIsValidOrder] = useState(false)
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const [error, setError] = useState(null)


    // Verificar las condiciones para que el pedido sea válido
    const isValidRequest = () => {

      // Regex
      const phoneNumberRegex = /^\d{9}$/;
      const dniRegex = /^\d{8}$/;
      
      const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);
      const isDniValid = dniRegex.test(dni);

      if( !isDniValid || !isPhoneNumberValid ) return false

      // Verificar si el carrito tiene al menos un producto
      if (cart.length === 0) return false;
  
      // Verificar el stock de cada producto
      // TODO ARREGLAR EL SIMBOLO, DEBE SER SOLO MENOR
      for (const item of cart) {
        const product = getProductDetails(item.productId, true);
        if (product?.stock < item.quantity) {
          return false; // Si el stock es insuficiente, no es válido
        }
      }
  
      // Verificar si todos los campos requeridos están completos
      if (!dni || !phoneNumber || (deliveryMethod === 'domicilio' && !address)) {
        return false; // Si algún campo obligatorio está vacío, no es válido
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
      } else {
          handleCityChange( 'Chimbote' ) // default to Chimbote cost
    }
  };

  // Cambio de ciudad
  const handleCityChange = ( city ) => {
    setCity( city )
    verifyDeliveryCost()
  }

  // Verificar el costo de acuerdo a la ciudad
  const verifyDeliveryCost = () => {
    if( city === 'Chimbote' ){
      setDeliveryCost( 20 )
    } else if( city === 'NvoChimbote' ){
      setDeliveryCost( 10 )
    }
  }
  
  
  // Function to handle order creation
  const handleGenerateOrder = async () => {

    if (!isValidOrder) {
      console.log("El pedido no es válido");
      return; // No proceder si el pedido no es válido
    }
    
    setIsLoading(true);
    
    // Prepare the new order data
    const newRequest = {
      dni,
      city: deliveryMethod === 'gratis' ? null : city === 'Chimbote' ? 1 : 2, 
      phoneNumber,
      deliveryMethod,
      address: deliveryMethod === 'gratis' ? null : address,
      priceDelivery: deliveryCost,
      orderItems: cart.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };
    

    try {     

      const response = await addRequest(newRequest);

      if (response.success) {
        console.log('Pedido creado con éxito');
        navigate(`/cart/paid/${response.data.requestId}`);  
      } 
  
      setIsLoading(false);

        
    } catch (err) {
      setError('Error al generar pedido')
      setIsLoading(false);
      
      console.error('Error al generar el pedido', err);

      
    } finally{
      setIsLoading( false )
      console.log('tercero');

      setTimeout(()=>{
        setError(null)
      },2000)
        
    }


  };
  







  // Cada vez que la ciudad cambie, verificaremos el costo de envio
  useEffect(() => {
    verifyDeliveryCost()
  },[city])

  // Llamar a esta función cada vez que el carrito o los campos cambien
  useEffect(() => {
    setIsValidOrder(isValidRequest());
  }, [cart, dni, phoneNumber, address, deliveryMethod]);




  return {
    deliveryMethod,
    setDeliveryMethod,
    deliveryCost,
    setDeliveryCost,
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