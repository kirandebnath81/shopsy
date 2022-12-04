import styled from "styled-components";

export const StyledProduct = styled.div`
  flex-basis: 23%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.1);
  transition: 300ms transform ease-out, 300ms box-shadow ease-out;
  padding: 10px 10px 15px;
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 851px) and (max-width: 1050px) {
    flex-basis: 31%;
  }

  @media screen and (max-width: 850px) {
    flex-basis: 47%;
    padding: 10px 10px 12px;
  }
`;

export const TopContainer = styled.div`
  img {
    width: 100%;
    min-height: 180px;
    max-height: 230px;
    cursor: pointer;
  }

  .product__wishlist-btn {
    text-align: end;
    margin-bottom: 5px;
    svg {
      font-size: clamp(1.2rem, 2.5vw, 1.3rem);
    }
  }

  @media screen and (min-width: 501px) and (max-width: 850px) {
    img {
      width: 100%;
      min-height: 180px;
      max-height: 270px;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 100%;
      max-height: 140px;
    }
  }
`;

export const BottomContainer = styled.div`
  margin-top: 25px;
  .product__title {
    display: flex;
    font-weight: 500;
    font-size: clamp(11px, 2.5vw, 1rem);
    cursor: pointer;
  }

  .product__price {
    font-size: clamp(12px, 2.5vw, 1rem);
    font-weight: 600;
    margin: 10px 0;
  }

  .product__rating {
    svg {
      font-size: clamp(11px, 3vw, 15px);
      color: red;
      margin-right: 3px;
    }
  }

  .product__cart-btn {
    font-size: clamp(12px, 1vw, 14px);
    padding: 6px 12px;
    margin-right: 0px;
    margin-top: 15px;
  }

  .product__cart-btn--stock {
    cursor: auto;
    &:hover {
      color: var(--primary-theme-color);
    }

    &:hover::before {
      opacity: 0;
    }
  }

  @media screen and (max-width: 850px) {
    .product__price {
      margin: 8px 0;
    }
  }
`;
