import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 125px 0 70px;
  @media screen and (max-width: 650px) {
    margin: 110px 0 70px;
  }
`;

export const LeftContainer = styled.div`
  flex-basis: 23%;
  min-width: 240px;
  height: 100vh;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 15px 0px 30px;
  background-color: rgba(0, 0, 0, 0.02);

  .products__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    .products__title {
      font-size: 1.3rem;
      font-weight: 500;
    }

    .products__icons {
      width: 90px;
      display: flex;
      justify-content: space-between;
      margin-right: 5px;

      button {
        cursor: pointer;
        border: none;
        padding: 3px 5px;
        border-radius: 3px;
        transition: 230ms background-color ease-in-out;
        svg {
          font-size: 1.4rem;
        }

        &:active {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }

      @media screen and (min-width: 650px) {
        display: none;
      }
    }
    .products__sorting {
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
  }

  .products__all-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (max-width: 650px) {
    padding: 0 12px;
  }
`;
