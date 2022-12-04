import { createContext, useContext, useState } from "react";

//context
const ModalContext = createContext();

//provider
export const ModalProvider = ({ children }) => {
  const [openSortPrice, setOpenSortPrice] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [openAddresses, setOpenAddresses] = useState(false);
  const [openNewAddress, setOpenNewAddress] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openSortPrice,
        setOpenSortPrice,
        openFilters,
        setOpenFilters,
        openNewAddress,
        setOpenNewAddress,
        openAddresses,
        setOpenAddresses,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

//consumer
export const useModal = () => useContext(ModalContext);
