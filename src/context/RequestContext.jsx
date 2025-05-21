import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./UserContext";
import { getApiUrl } from "../utils/getApiURL";

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

const statusLabelMap = [
  { code: 0, label: "PENDIENTE" },
  { code: 1, label: "COMPLETADO" },
  { code: 2, label: "CANCELADO" },

]




const RequestContext = createContext();

export const RequestProvider = ({ children }) => {

  const { user } = useAuth()

  const [requests, setRequests] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.id) {
      fetchRequests();
    }
  }, [user?.id]);

  const fetchRequests = async (id) => {
    const apiUrl = getApiUrl();
    const token = localStorage.getItem("authToken");
    if (!token) {
      return [];
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${apiUrl}/order/user`, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });  
      setRequests(response.data);
    } catch (err) {
      setError("Error al obtener los pedidos del usuario.");
    } finally {
      setLoading(false);
    }
  };

  const addRequest = async (newRequest, navigate) => {
    const apiUrl = getApiUrl();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${apiUrl}/order`, 
      newRequest, 
      {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      });

      if (response.status === 200) {
        setRequests((prev) => [...prev, response.data]);
        
        if ( response.data.id ) {
          navigate(`/cart/paid/${response.data.id}`);
        }
      } 

      } catch (err) {
        console.error("Error al crear el pedido", err);
        setError("Error al crear el pedido.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      }
  };

  const updateRequestState = async (id, newStatusCode) => {
    const apiUrl = getApiUrl();
    try {
      const response = await axios.put(
        `${apiUrl}/order`,
        { orderId : id , 
          status: newStatusCode 
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
        }
      );
  
      // Actualizar el estado local de los pedidos
      setRequests((prev) =>{
        
        const updatedRequests = prev.map((request) =>{
          const statusLabelCheck = statusLabelMap.find((status) => status.code === newStatusCode);
          return request.id === id
            ? { ...request, status: newStatusCode, statusLabel: statusLabelCheck.label  }
            : request
        }
        )
        return updatedRequests;
        }
      );
    } catch (err) {
      console.error("Error al actualizar estado del pedido:", err);
      setError("Error al actualizar el estado del pedido.");
    }
  };
    
  const getRequestById = async(id) => {
    const apiUrl = getApiUrl();
    try {
      const response = await axios.get(`${apiUrl}/order/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      });

      return response.data;

    } catch (err) {
      console.error("Error al obtener el pedido por ID:", err);
      setError("Error al obtener el pedido por ID.");
    }
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