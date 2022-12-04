import { useEffect, useState } from "react";

//icons
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

//styles
import {
  Container,
  Box,
  LeftBox,
  RightBox,
  Card,
  ButtonsBox,
} from "./Cart.styles";

import {
  ButtonFill,
  ButtonOutline,
  StyledTitle,
  EmptyBox,
} from "../../styles/Main.styles";

//img
import images from "../../constants/images";

//utils
import {
  getProductPrice,
  getTotalItems,
  getTotalPrice,
  addToDatabase,
  setCartItems,
  loadScript,
} from "../../utils";

//firebase
import { db } from "../../config/firebaseConfig";
import { ref, set } from "firebase/database";

//others
import { useNavigate } from "react-router-dom";
import numeral from "numeral";
import axios from "axios";
import { v4 } from "uuid";
import { useAuth, useProducts, useProfile } from "../../contexts";
import Address from "./components/Address";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, wishlist } = useProducts();
  const { user, userName } = useAuth();
  const { addresses, selectedAddress, orders } = useProfile();

  const [paymentSuccessMsg, setPaymentSuccessMsg] = useState(null);

  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  //write order data in the db
  const setOrderData = async (paymentInfo) => {
    const address = addresses.find(({ id }) => id === selectedAddress);
    const price = getTotalPrice(cartItems);
    const date = new Date().toDateString();
    const order = {
      products: cartItems,
      price,
      address,
      date,
      paymentInfo,
      id: v4(),
    };

    const databaseRef = ref(db, `${user.uid}/orders`);
    try {
      await set(databaseRef, [order, ...orders]);
    } catch (error) {
      console.log(error);
    }
  };

  //display Razorpay for payment
  const displayRazorpay = async () => {
    if (selectedAddress === "") {
      console.log("Empty address");
      return;
    }

    //load checkout script
    try {
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    } catch (error) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const price = getTotalPrice(cartItems);
    // creating a new order
    const orderUrl = "http://localhost:8000/api/payment/orders";
    const result = await axios.post(orderUrl, { amount: price });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // getting the order details
    const { id, amount, currency } = result.data;

    var options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: amount,
      currency: currency,
      name: "Shopsy",
      description: "Test Transaction",
      image: images.logo,
      order_id: id,
      handler: async function (response) {
        try {
          const verifyUrl = "http://localhost:8000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          setOrderData(response);
          setPaymentSuccessMsg(data.message);
          setCartItems(user, cartItems, "", "empty");
          window.scroll(0, 0);
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name: userName,
        email: user.email,
        contact: "9999999999",
      },
      theme: {
        color: "rgb(13, 82, 255)",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  //move to wishlist and remove from cartItems
  const wishlistHandler = (item) => {
    addToDatabase(user, wishlist, item, "move");
    setCartItems(user, cartItems, item, "remove");
  };

  //when cartItems is empty
  if (cartItems.length === 0) {
    if (paymentSuccessMsg) {
      return (
        <Container>
          <div
            className="cart__order-success-text"
            style={{ marginTop: "50px" }}
          >
            {paymentSuccessMsg}
          </div>
          <ButtonFill
            className="cart__view-order-btn"
            onClick={() => {
              navigate("/orders");
              setPaymentSuccessMsg(null);
            }}
          >
            View Order
          </ButtonFill>
        </Container>
      );
    } else {
      return (
        <Container>
          <EmptyBox>Your cart is empty</EmptyBox>
        </Container>
      );
    }
  }

  return (
    <Container>
      <StyledTitle>Shopping Cart</StyledTitle>
      <Box>
        <LeftBox>
          <Address />
          {cartItems?.map((item) => (
            <Card key={item?.id}>
              <img
                src={item?.image}
                alt="product"
                onClick={() => navigate(`/product/${item?.id}`)}
              />
              <div className="cart__item-details">
                <div
                  className="cart__item-title"
                  onClick={() => navigate(`/product/${item?.id}`)}
                >
                  {item?.title}
                </div>
                <div className="cart__item-price">
                  {getProductPrice(item?.price)}
                </div>
                <ButtonsBox>
                  <div className="cart__qty-btns">
                    <div
                      className="cart__item-delete"
                      onClick={() => setCartItems(user, cartItems, item, "dec")}
                    >
                      {item?.count === 1 ? (
                        <AiOutlineDelete />
                      ) : (
                        <AiOutlineMinus />
                      )}
                    </div>
                    <div>{item?.count}</div>
                    <div
                      className="cart__item-add"
                      onClick={() => setCartItems(user, cartItems, item, "inc")}
                    >
                      <IoMdAdd />
                    </div>
                  </div>

                  <ButtonOutline
                    className="cart__move-item-btn"
                    onClick={() => wishlistHandler(item)}
                  >
                    Move to Wishlist
                  </ButtonOutline>
                </ButtonsBox>
              </div>
            </Card>
          ))}
        </LeftBox>
        <RightBox>
          <div className="cart__total-products">
            Total Products (<span>{getTotalItems(cartItems)}</span>)
          </div>
          <div className="cart__total-price">
            Total Amount{" "}
            <span>
              &#8377; {numeral(getTotalPrice(cartItems)).format("0,0")}
            </span>
          </div>
          <ButtonFill
            className={`cart__order-btn ${
              selectedAddress === "" && "cart__order-static-btn"
            }`}
            onClick={displayRazorpay}
          >
            Place Order
          </ButtonFill>

          {selectedAddress === "" && (
            <div className="cart__empty-address-msg ">
              <BiErrorCircle />
              <span>Select address to place order</span>
            </div>
          )}
        </RightBox>
      </Box>
    </Container>
  );
};

export default Cart;
