import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

//create context
const ProductsContext = createContext();

//create provider
export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //getting the  products data through api call
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);

      setData(
        data.map((item) => ({
          ...item,
          count: 1,
        }))
      );

      setSortData(
        data.map((item) => ({
          ...item,
          count: 1,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        data,
        sortData,
        wishlist,
        setWishlist,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

//create consumer
export const useProducts = () => useContext(ProductsContext);
