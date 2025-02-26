import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

  // Funciones para manejar el estado del modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

// Hook para usar el ModalContext
export const useModalContext = () => useContext(ModalContext);