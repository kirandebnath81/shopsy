import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--secondary-background-color);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0 100px;
  @media only screen and (max-width: 650px) {
    padding: 0px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(250px, 85%, 460px);
  padding: 35px 45px;
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  /* margin: 100px 0px 240px; */

  .auth__title {
    text-align: center;
    margin-bottom: 40px;
    color: var(--secondary-theme-color);
    font-size: clamp(1.4rem, 2.5vw, 1.6rem);
    font-weight: 600;
  }

  .auth__error {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    margin-bottom: 30px;
    font-size: 14.5px;
  }

  .auth__btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    margin-bottom: 32px;
    background: var(--secondary-theme-color);
    border-color: var(--secondary-theme-color);
  }

  .auth__test-login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    height: 25px;
    span {
      font-size: 15.5px;
      cursor: pointer;
      color: var(--secondary-theme-color);
      font-weight: 600;
      margin-right: 5px;
      &:hover {
        text-decoration: underline;
        text-decoration-color: var(--secondary-theme-color);
      }
    }
  }

  .auth__link {
    text-align: center;
    font-size: 15.5px;
    a {
      font-weight: 600;
      cursor: pointer;
      margin-left: 5px;
      font-size: 1rem;
      color: var(--secondary-theme-color);
    }
  }

  @media only screen and (max-width: 650px) {
    padding: 50px 0px;
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0);
  }
`;

export const InputBox = styled.div`
  margin-bottom: 25px;

  .auth__input {
    box-shadow: ${({ selected }) =>
      selected === "selected"
        ? "0px 0px 0px 1px var(--secondary-theme-color)"
        : "0px 0px 0px 1px rgba(0, 0, 0, 0.1)"};

    border-radius: 5px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      user-select: none;
      outline: none;
      border: none;
      text-indent: 15px;
      font-weight: 500;
      flex: 1;
      height: 38px;
      border-radius: 5px;
      font-size: 15px;
      font-family: "Montserrat", sans-serif;
      &::placeholder {
        color: rgba(0, 0, 0, 0.33);
      }
    }

    div {
      flex-basis: 10%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1.1rem;
      }
    }
  }

  .auth__input-error {
    display: flex;
    align-items: center;
    font-size: 13.5px;
    color: red;
    margin-top: 5px;

    svg {
      margin-right: 3px;
      font-size: 15px;
    }
  }
`;
