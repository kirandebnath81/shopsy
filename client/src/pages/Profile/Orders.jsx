import { useEffect } from "react";

import numeral from "numeral";

//styles
import {
  Container,
  Box,
  ProductsContainer,
  ProductBox,
} from "./styles/Orders.styles";
import { StyledTitle, EmptyBox } from "../../styles/Main.styles";

import { useProfile } from "../../contexts";
import { getProductPrice } from "../../utils";

const Orders = () => {
  const { orders } = useProfile();

  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (orders.length === 0) {
    return (
      <Container>
        <EmptyBox>You have no orders </EmptyBox>
      </Container>
    );
  }

  return (
    <Container>
      <StyledTitle>My Orders</StyledTitle>
      {orders.map(({ products, price, address, date, paymentInfo, id }) => (
        <Box key={id}>
          <div className="order__content">
            <span className="order__content-name">Order id : </span>
            <span>{paymentInfo.razorpay_order_id}</span>
          </div>
          <div className="order__content">
            <span className="order__content-name">Total amount : </span>
            <span>&#8377; {numeral(price).format("0,0")}</span>
          </div>
          <div className="order__content">
            <span className="order__content-name">Order date : </span>
            <span>{date}</span>
          </div>
          <div className="order__content">
            Order will be delivered in {Math.ceil(Math.random() * 7 + 1)} days
          </div>
          <div className="order__content">
            <span className="order__content-name">Order address : </span>
            <span>{address.area}, </span>
            <span>{address.city} -</span>
            <span>{address.pincode} </span>
            <span> Phone - {address.mobileNo}</span>
          </div>

          <ProductsContainer>
            {products.map(({ title, image, price, count, id }) => (
              <ProductBox key={id}>
                <div className="order__product-img">
                  <img src={image} alt="product-img" />
                </div>
                <div className="order__product-details">
                  <div>{title}</div>
                  <div className="order__product-price">
                    {getProductPrice(price)}
                  </div>
                  <div>Quantity : {count}</div>
                </div>
              </ProductBox>
            ))}
          </ProductsContainer>
        </Box>
      ))}
    </Container>
  );
};

export default Orders;
