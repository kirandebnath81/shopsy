import styled from "styled-components";

export const Container = styled.div`
  width: clamp(250px, 90%, 900px);
  margin: 0px auto;
  padding: 115px 0 115px;
  min-height: 85vh;

  .cart__order-success-text {
    text-align: center;
    font-size: clamp(1rem, 4vw, 1.4rem);
    font-weight: 500;
    margin-top: 50px;
    line-height: 1.3rem;
  }

  .cart__view-order-btn {
    display: block;
    padding: 7px 14px;
    font-size: clamp(13px, 1.2vw, 1rem);
    margin: 40px auto 0;
  }

  @media screen and (max-width: 600px) {
    .cart__view-order-btn {
      padding: 6px 12px;
      margin: 30px auto 0;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

//CART BOXES
export const LeftBox = styled.div`
  flex-basis: 57%;
`;

export const RightBox = styled.div`
  flex-basis: 38%;
  height: 45vh;
  box-shadow: -1px 3px 8px 0px rgba(0, 0, 0, 0.15);
  padding: 30px;
  border-radius: 10px;

  div {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    font-weight: 500;
  }

  .cart__total-products {
    span {
      font-weight: 600;
    }
  }

  .cart__total-price {
    margin-top: 15px;
    span {
      font-weight: 600;
      font-size: clamp(1.1rem, 1.5vw, 1.2rem);
      margin-left: 20px;
    }
  }

  .cart__order-btn {
    width: 100%;
    padding: 7px;
    font-size: clamp(14.5px, 1.5vw, 15.5px);
    margin-top: 30px;
  }

  .cart__order-static-btn {
    cursor: auto;
    &:active {
      background: var(--background-color);
    }
  }
  .cart__empty-address-msg {
    display: flex;
    align-items: center;
    color: #f50f0f;
    font-weight: 600;
    margin-top: 20px;
    font-size: clamp(15px, 2vw, 1.05rem);

    svg {
      margin-right: 4px;
      font-size: clamp(1rem, 2vw, 1.1rem);
    }
  }
`;

//CART ITEMS
export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: -1px 3px 8px 0px rgba(0, 0, 0, 0.15);

  img {
    width: 110px;
    height: 100px;
    cursor: pointer;
  }

  .cart__item-details {
    flex: 1;
    padding-left: 30px;

    .cart__item-title {
      width: fit-content;
      margin-bottom: 10px;
      font-weight: 500;
      font-size: clamp(14px, 1.3vw, 15px);
      line-height: 1.3rem;
      cursor: pointer;
    }
    .cart__item-price {
      font-weight: 600;
      font-size: clamp(15px, 1.5vw, 1rem);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 20px 15px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  .cart__qty-btns {
    display: flex;
    height: 30px;
    border: 1px solid var(--primary-theme-color);
    margin-right: 20px;

    div {
      width: 40px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: clamp(14px, 1.2vw, 1rem);
      transition: 300ms background-color ease-in-out;
      user-select: none;

      &:not(:last-child) {
        border-right: 1px solid var(--primary-theme-color);
      }
      @media screen and (max-width: 600px) {
        width: 28px;
      }
    }

    .cart__item-delete {
      font-size: clamp(14px, 1.2vw, 1rem);
      cursor: pointer;
      &:active {
        background-color: var(--primary-theme-color);
      }
    }

    .cart__item-add {
      font-size: clamp(1rem, 1.8vw, 1.2rem);
      cursor: pointer;
      &:active {
        background-color: rgb(30, 224, 30);
      }
    }
  }

  .cart__move-item-btn {
    font-size: clamp(12px, 1vw, 14px);
    padding: 6px 12px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    .cart__qty-btns {
      margin-bottom: 15px;
      height: 27px;
    }
  }
`;
