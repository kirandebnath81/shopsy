import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 200ms visibility ease-in-out, 250ms background-color ease-in-out;
  visibility: ${({ menu }) => (menu === "view" ? "normal" : "hidden")};
  background-color: ${({ menu }) =>
    menu === "view" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"};

  cursor: pointer;
`;

export const Box = styled.div`
  width: 62%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0px;
  transition: 300ms left ease-out;
  left: ${({ menu }) => (menu === "view" ? "0px" : "-62%")};
  cursor: default;
  .menu__user {
    background-color: rgb(6, 20, 101);
    display: flex;
    align-items: center;
    padding: 35px 15px;
    color: white;
    font-weight: 500;
    span {
      margin-left: 15px;
      font-size: clamp(1.1rem, 2vw, 1.1rem);
    }
    svg {
      cursor: default;
      font-size: clamp(1.7rem, 5vw, 2.1rem);
    }
  }

  .menu__signin {
    background-color: white;
    padding: 25px 15px;
    font-weight: 500;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    div {
      margin-bottom: 5px;
    }
    .menu__signin-title {
      font-weight: 500;
    }
    .menu__signin-sub-title {
      font-size: 15px;
    }

    .menu__signin-btn {
      padding: 5px 10px;
      margin-top: 10px;
      font-size: 15px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 600px) {
    .menu__user {
      padding: 30px 10px;
      span {
        margin-left: 10px;
      }
    }
  }
`;

export const MenuItems = styled.ul`
  margin-top: 30px;

  li {
    font-weight: 500;
    margin-top: 10px;
    a {
      display: block;
      padding: 10px 15px;
      transition: 250ms color ease-in-out;
      &:hover {
        color: var(--primary-theme-color);
      }
    }

    .menu__item-active {
      color: var(--primary-theme-color);
      font-weight: 600;
    }
  }
  .menu__item-signout {
    padding: 10px 15px;
    cursor: pointer;
    transition: 250ms color ease-in-out;
    &:hover {
      color: var(--primary-theme-color);
    }
  }
`;
