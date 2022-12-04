import styled from "styled-components";
import { toast } from "react-toastify";

//icons
import { VscHeart } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";

//firebase
import { ref, set } from "firebase/database";
import { db } from "../config/firebaseConfig";

export const addToDatabase = async (user, wishlist, product, type) => {
  let items;

  if (type === "move") {
  }

  if (wishlist.find(({ id }) => id === product?.id)) {
    if (type === "move") {
      items = wishlist;
    } else {
      items = wishlist.filter(({ id }) => id !== product?.id);
    }
  } else {
    items = [...wishlist, { ...product, count: 1 }];
  }

  const databaseRef = ref(db, `${user.uid}/wishlist`);
  try {
    await set(databaseRef, items);
  } catch (err) {
    console.log(err);
  }
};

const addToWishlist = (user, wishlist, product) => {
  const clickHandler = (toastMsg) => {
    if (user) {
      addToDatabase(user, wishlist, product);
      toast.info(toastMsg);
    } else {
      toast.warning("Sign in to add");
    }
  };

  if (wishlist.find(({ id }) => id === product.id)) {
    return (
      <StyledIcon>
        <FaHeart onClick={() => clickHandler("Removed from Wishlist")} />
      </StyledIcon>
    );
  } else {
    return (
      <StyledIcon>
        <VscHeart onClick={() => clickHandler("Added to Wishlist")} />
      </StyledIcon>
    );
  }
};

const StyledIcon = styled.div`
  svg {
    cursor: pointer;
    color: var(--primary-theme-color);
  }
`;

export default addToWishlist;
