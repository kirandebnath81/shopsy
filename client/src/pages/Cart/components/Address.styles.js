import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: -1px 3px 8px 0px rgba(0, 0, 0, 0.15);

  .cart__change-address-btn {
    font-size: clamp(12.5px, 1.2vw, 14.5px);
    padding: 6px 12px;
    margin-right: 0px;
  }

  .cart__address {
    flex: 1;
    margin-right: 10px;
    div {
      margin-bottom: 4px;
      font-size: clamp(13px, 1.2vw, 14px);
      color: rgba(0, 0, 0, 0.7);
      font-weight: 500;
      line-height: 1.1rem;
    }

    .cart__address-empty {
      font-size: clamp(1rem, 2vw, 1.1rem);
      font-weight: 500;
    }

    .cart__address-name {
      margin-bottom: 8px;
      color: rgba(0, 0, 0, 0.8);
      line-height: 1.3rem;

      span {
        font-weight: 600;
      }
    }
  }
`;

export const AddressesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddressesBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: clamp(250px, 90%, 600px);
  max-height: 95vh;
  overflow-y: auto;

  @media screen and (max-width: 600px) {
    max-height: 80vh;
  }
`;
