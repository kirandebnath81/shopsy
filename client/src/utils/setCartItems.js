import { toast } from "react-toastify";

//firebase
import { db } from "../config/firebaseConfig";
import { ref, set } from "firebase/database";

const setCartItems = async (user, cartItems, product, type) => {
  let productList = [];

  if (type === "inc") {
    productList = cartItems.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
  } else if (type === "dec") {
    if (product.count === 1) {
      productList = cartItems.filter((item) => item.id !== product.id);
    } else {
      productList = cartItems.map((item) =>
        item.id === product.id ? { ...item, count: item.count - 1 } : item
      );
    }
  } else if (type === "remove") {
    productList = cartItems.filter(({ id }) => id !== product.id);
  } else if (type === "empty") {
    productList = [];
  } else {
    if (cartItems?.find(({ id }) => id === product.id)) {
      productList = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, count: item.count + product.count }
          : item
      );
    } else {
      productList = [...cartItems, product];
    }
    toast.info("Added to Cart");
  }

  const databaseRef = ref(db, `${user.uid}/cartItems`);

  try {
    await set(databaseRef, productList);
  } catch (err) {
    console.log(err);
  }
};

export default setCartItems;
