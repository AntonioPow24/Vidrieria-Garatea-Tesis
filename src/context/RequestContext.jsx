import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./UserContext";



const pruebaPedidos = [
  {
    "orderId": 1,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52,
    "orderStatus": "Completado",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
  {
    "orderId": 2,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52.00,
    "orderStatus": "Pendiente",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
  {
    "orderId": 3,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52,
    "orderStatus": "Completado",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
  {
    "orderId": 4,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52.00,
    "orderStatus": "Pendiente",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
  {
    "orderId": 5,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52,
    "orderStatus": "Completado",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
  {
    "orderId": 6,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52.00,
    "orderStatus": "Cancelado",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
  {
    "orderId": 7,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52,
    "orderStatus": "Completado",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
  {
    "orderId": 8,
    "dni": "12345678",
    "city": "Chimbote",
    "phoneNumber": "987654321",
    "priceDelivery": 10,
    "registerDate": "12 Abril 2025",
    "totalOrder": 52.00,
    "orderStatus": "Completado",
    // "itemsRequest": [
    //   {
    //     "idProduct": 1,
    //     "titleName": "Laptop Dell Inspiron",
    //     "quantity": 2,
    //     "price": 50.25,
    //     "imageUrl": "https://i.postimg.cc/wtN0pSw5/1.png",
    //     "category": "VENTANAS"
    //   }
    // ]
  },
]




const RequestContext = createContext();

export const RequestProvider = ({ children }) => {

  const { user } = useAuth()



  const [requests, setRequests] = useState(pruebaPedidos); // Lista de pedidos del usuario
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




  // todo DESCOMENTAR CODIGO PARA OBTENER LOS PEDIDOS
  // Obtener los pedidos del usuario al cargar el componente
  // useEffect(() => {
  //   if (user?.userId) {
  //     fetchRequests(user.userId);
  //   }
  // }, [user?.userId]);


  // Obtener los pedidos del usuario
  const fetchRequests = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/requests/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setRequests(response.data); // Suponiendo que el backend devuelve los pedidos
    } catch (err) {
      setError("Error al obtener los pedidos del usuario.");
    } finally {
      setLoading(false);
    }
  };


  // Crear un nuevo Pedido
    const addRequest = async (newRequest) => {
      console.log('creando pedido');
      
      
    try {
        const response = await axios.post("https://ecommerce-dqp2.onrender.com/api/v1/order/create", newRequest, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
        });

        if (response.status === 200) {

          setRequests((prev) => [...prev, response.data]); // Añadir el nuevo pedido a la lista
          return { success: true, data: response.data }; // Devuelve éxito con la data del pedido
        } else {
          return { success: false, message: "Error al procesar el pedido" };
        }

        } catch (err) {
          console.error("Error al crear el pedido", err);
          setError("Error al crear el pedido.");
          return { success: false, message: err.message || "Error desconocido" }; // Manejo del error
        }
    };

    // Cambiar el estado de un pedido
    const updateRequestState = async (orderId, newState) => {
      try {
        const response = await axios.put(
          `/api/v1/order/status/${orderId}`,
          { orderstatus: newState },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
          }
        );
  
        // Actualizar el estado local de los pedidos
        setRequests((prev) =>
          prev.map((request) =>
            request.orderId === orderId
              ? { ...request, orderStatus: newState }
              : request
          )
        );
      } catch (err) {
        console.error("Error al actualizar estado del pedido:", err);
        setError("Error al actualizar el estado del pedido.");
      }
    };
    
    // todo falta funcion fetch
    const getRequestById = (orderId) => {

        return requests.find((request) => request.orderId === orderId) || null;
    };

  return (
    <RequestContext.Provider
      value={{
        requests,
        setRequests,
        fetchRequests,
        addRequest,
        updateRequestState,
        getRequestById,
        loading,
        error,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequestsContext = () => useContext(RequestContext);