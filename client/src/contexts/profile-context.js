import { createContext, useState, useContext } from "react";

//create context
const ProfileContext = createContext();

//create provider
export const ProfileProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [editedAddress, setEditedAddress] = useState(null);
  const [orders, setOrders] = useState([]);
  return (
    <ProfileContext.Provider
      value={{
        addresses,
        setAddresses,
        selectedAddress,
        setSelectedAddress,
        editedAddress,
        setEditedAddress,
        orders,
        setOrders,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

//create consumer with custom hook
export const useProfile = () => useContext(ProfileContext);
