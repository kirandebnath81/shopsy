import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  transition: 300ms box-shadow ease-in-out, 350ms transform ease-in;

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
  }

  input {
    margin-right: 15px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      width: 23px;
    }
  }

  .selectedAddress__input-text {
    div {
      margin: 5px 0;
      font-size: clamp(14px, 1.2vw, 15px);
      font-weight: 500;
      color: rgba(0, 0, 0, 0.7);
      &:first-child {
        margin: 0 0 7px;
        color: rgba(0, 0, 0, 0.9);
      }
    }

    .selectedAddress__btn {
      font-size: clamp(12px, 1.2vw, 13px);
      font-weight: 500;
      border-radius: 5px;
      margin: 20px 20px 12px 0px;
      padding: 5px 13px;
    }
  }
`;
