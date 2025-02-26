import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./UserContext";

const pruebaPedidos = [
  {
    "requestId": 1,
    // "dni": "12345678",
    "city": "Chimbote",
    // "phoneNumber": "987654321",
    "priceDelivery": 10.5,
    "registerDate": "2025-01-27T22:06:15.6431457",
    "totalRequest": 52.00,
    "statusRequest": "Completado",
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
    "requestId": 2,
    // "dni": "12345678",
    "city": "Chimbote",
    // "phoneNumber": "987654321",
    "priceDelivery": 10.5,
    "registerDate": "2025-01-27T22:06:15.6431457",
    "totalRequest": 52.00,
    "statusRequest": "Pendiente",
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
  //   if (user?.idUser) {
  //     fetchRequests(user.idUser);
  //   }
  // }, [user?.idUser]);


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

    const addRequest = async (newRequest) => {
    try {
        const response = await axios.post("/api/requests", newRequest, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
        });
        setRequests((prev) => [...prev, response.data]); // Añadir el nuevo pedido
        } catch (err) {
        setError("Error al crear el pedido.");
        }
    };

    // Cambiar el estado de un pedido
    const updateRequestState = async (idRequest, newState) => {
      try {
        const response = await axios.put(
          `/api/v1/order/status/${idRequest}`,
          { orderstatus: newState },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
          }
        );
  
        // Actualizar el estado local de los pedidos
        setRequests((prev) =>
          prev.map((request) =>
            request.idRequest === idRequest
              ? { ...request, statusRequest: newState }
              : request
          )
        );
      } catch (err) {
        console.error("Error al actualizar estado del pedido:", err);
        setError("Error al actualizar el estado del pedido.");
      }
    };
    
    const getRequestById = (idRequest) => {
        return requests.find((request) => request.idRequest === idRequest) || null;
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