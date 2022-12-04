import { createContext, useContext, useState } from "react";

//context
const AuthContext = createContext();

//provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// custom-hook for consuming context
export const useAuth = () => useContext(AuthContext);
