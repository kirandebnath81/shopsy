import styled from "styled-components";

export const Row = styled.div`
  margin: 100px 0px 50px;
  padding: 0 50px;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    flex-basis: 100%;
    padding: 0 15px;
  }
`;

export const ColOne = styled.div`
  flex-basis: 38%;
  min-width: 400px;
  padding: 30px 75px 30px 30px;

  div {
    text-align: end;
    margin-bottom: 10px;

    svg {
      font-size: clamp(1.4rem, 2.5vw, 1.6rem);
      cursor: pointer;
      color: var(--primary-theme-color);
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 400px;
  }

  @media screen and (max-width: 650px) {
    flex-basis: 100%;
    min-width: 0px;
    max-width: 450px;
    padding: 30px 40px;
  }
`;

export const ColTwo = styled.div`
  flex: 1;
  min-width: 350px;
  height: 100%;
  min-height: 400px;
  padding: 20px 0px;

  .product__title {
    font-size: clamp(1.1rem, 3.3vw, 1.3rem);
    font-weight: 700;
    color: var(--secondary-theme-color);
    letter-spacing: 0.6px;
    line-height: 1.6rem;
  }

  .product__delivery {
    font-weight: 600;
    color: var(--secondary-theme-color);
    font-size: clamp(15px, 2.5vw, 1rem);
  }

  .product__price {
    font-weight: 700;
    font-size: clamp(1.15rem, 2.5vw, 1.25rem);
    margin: 30px 0px;
    color: var(--primary-theme-color);
  }

  .product__btns {
    .product__stock-btn {
      cursor: default;
      &:hover {
        color: red;
      }
      &::before {
        display: none;
      }
    }
  }

  @media screen and (max-width: 650px) {
    flex-basis: 100%;
    min-width: 0px;
    .product__title {
      line-height: 1.5rem;
    }
  }
`;

export const RatingBox = styled.div`
  margin: 20px 0px;
  .product__rating-icon {
    color: var(--primary-theme-color);
    margin-right: 5px;
    font-size: clamp(15px, 1.5vw, 1rem);
  }
  .product__rating-count {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    font-size: clamp(15px, 1.5vw, 1rem);
  }
`;

export const DescBox = styled.div`
  .product__desc-title {
    font-weight: bold;
    color: var(--secondary-theme-color);
    font-size: 1rem;
  }

  .product__desc-content {
    font-size: 15px;
    line-height: 1.15rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    word-spacing: 1.5px;
    margin: 10px 0px;
  }

  @media screen and (max-width: 650px) {
    .product__desc-title {
      font-size: 14.5px;
    }

    .product__desc-content {
      font-size: 13px;
      line-height: 1rem;
    }
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .product__Qty-title {
    font-weight: bold;
    color: var(--secondary-theme-color);
    font-size: clamp(1.05rem, 2.5vw, 1.2rem);
    margin-right: 20px;
  }

  .product__Qty-content {
    display: flex;
    border: 1px solid var(--primary-theme-color);

    div {
      width: 40px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: clamp(1.25rem, 2.5vw, 1.35rem);
      transition: 300ms background-color ease-in-out;
      user-select: none;

      &:not(:last-child) {
        border-right: 1px solid var(--primary-theme-color);
      }

      @media screen and (max-width: 650px) {
        width: 35px;
        height: 30px;
      }
    }

    .product__Qty-delete {
      font-size: clamp(1rem, 2.5vw, 1.1rem);
      cursor: pointer;
      &:active {
        background-color: var(--primary-theme-color);
      }
    }

    .product__Qty-add {
      font-size: clamp(1.3rem, 2.5vw, 1.4rem);
      cursor: pointer;
      &:active {
        background-color: rgb(30, 224, 30);
      }
    }
  }
`;
