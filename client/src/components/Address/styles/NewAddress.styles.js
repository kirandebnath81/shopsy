import styled from "styled-components";

export const Container = styled.div``;

export const FormContainer = styled.div`
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

export const StyledForm = styled.form`
  background-color: white;
  padding: 20px 30px;
  border-radius: 15px;
  width: clamp(200px, 90%, 500px);

  .address__input {
    margin: 18px 0;
    input {
      width: 100%;
      height: 30px;
      text-indent: 13px;
      border-radius: 5px;
      user-select: none;
      outline: none;
      border: none;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: clamp(13.5px, 1.5vw, 14.5px);
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
      transition: 250ms box-shadow ease-in;

      &:focus {
        box-shadow: 0px 0px 0px 1px var(--secondary-theme-color);
      }
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .address__input-error {
      font-size: clamp(12px, 1.5vw, 13px);
      color: red;
      display: flex;
      align-items: center;
      margin-top: 6px;
      svg {
        margin-right: 3px;
        font-size: clamp(13px, 1.5vw, 14px);
      }
    }
  }

  .address__form-btn {
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    margin: 10px 20px 12px 0px;
    padding: 5px 15px;
  }

  @media screen and (max-width: 600px) {
    padding: 15px 20px;
    .address__form-btn {
      padding: 5px 12px;
      font-size: 12px;
    }
  }
`;
