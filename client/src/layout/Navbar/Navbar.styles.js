import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  z-index: 5;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 600px) {
    padding: 0px 20px 0 7px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar__large-menu {
    display: none;
    margin-top: 5px;
    svg {
      margin-right: 7px;
      font-size: 1.8rem;
      cursor: pointer;
    }
  }

  .navbar__search {
    flex: 1;
  }

  @media screen and (max-width: 900px) {
    .navbar__large-menu {
      display: block;
    }

    .navbar__search {
      display: none;
    }
  }
`;

export const StyledLogo = styled.ul`
  flex-basis: 30%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: clamp(1.45rem, 2.5vw, 1.7rem);
  white-space: nowrap;
  cursor: pointer;

  span {
    color: var(--primary-theme-color);
  }

  @media screen and (max-width: 900px) {
    flex: 1;
  }
`;

export const NavItems = styled.ul`
  flex-basis: 42%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li {
    list-style: none;
    margin-left: 30px;
    white-space: nowrap;

    svg {
      font-size: clamp(1.35rem, 2vw, 1.8rem);
      cursor: pointer;
    }
  }

  .navbar__item {
    font-size: 1.1rem;
    font-weight: 500;
    transition: 250ms color ease-in-out;

    &:hover {
      color: var(--primary-theme-color);
    }

    .navbar__item-active {
      color: var(--primary-theme-color);
      font-weight: 600;
    }
  }

  .navbar__search-icon {
    display: none;
  }

  .navbar__small-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    position: relative;
    background-color: white;
    svg {
      cursor: pointer;
      font-size: clamp(1.8rem, 2.3vw, 2rem);
    }
  }

  @media screen and (max-width: 900px) {
    .navbar__item {
      display: none;
    }

    li {
      margin-left: 22px;
    }

    .navbar__search-icon {
      display: block;
    }
    .navbar__small-menu {
      display: none;
    }
  }
`;

export const LoginButton = styled.div`
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
  border: 1.3px solid red;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin-left: 30px;
  white-space: nowrap;
  transition: 300ms background-color ease-in-out, 300ms color ease-in-out;
  &:hover {
    color: white;
    background-color: var(--primary-theme-color);
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const BackIcon = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 30px;
  cursor: pointer;
  margin-right: 5px;
  font-size: 1.3rem;
`;
