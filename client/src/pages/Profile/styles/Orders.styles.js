import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 115px 0 80px;
`;

export const Box = styled.div`
  width: clamp(250px, 92%, 600px);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0px auto 35px;
  padding: 25px;

  .order__content {
    margin-bottom: 6px;
    font-size: clamp(14px, 1.5vw, 1rem);
    font-weight: 500;
    line-height: 1.4rem;
    .order__content-name {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: 180px;
  box-shadow: 0px -0.5px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 25px;
  overflow-y: auto;
  @media screen and (max-width: 600px) {
    height: 150px;
  }
`;

export const ProductBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px 10px 15px 15px;
  .order__product-img {
    flex-basis: 30%;
    img {
      width: 140px;
      padding: 5px;
      max-height: 150px;
    }
  }

  .order__product-details {
    margin-left: 15px;
    margin-top: 10px;
    div {
      font-weight: 500;
      margin-bottom: 10px;
      font-size: clamp(12.5px, 1.5vw, 15px);
      line-height: 1.1rem;
    }
    .order__product-price {
      font-size: clamp(13.5px, 1.5vw, 1rem);
    }
  }

  @media screen and (max-width: 600px) {
    .order__product-img {
      img {
        width: 100px;
        max-height: 120px;
      }
    }
    .order__product-details {
      div {
        margin-bottom: 6px;
      }
    }
  }
`;
