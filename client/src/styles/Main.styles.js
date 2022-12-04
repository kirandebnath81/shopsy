import styled from "styled-components";

export const ButtonFill = styled.button`
  padding: 12px 25px;
  border-radius: 5px;
  background: var(--background-color);
  cursor: pointer;
  border: 1px solid var(--primary-theme-color);
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  transition: 350ms background ease-in-out;
  margin-right: 30px;

  &:active {
    background: var(--background-hover-color);
  }

  @media screen and (max-width: 650px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`;

export const ButtonOutline = styled.button`
  padding: 12px 25px;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  border: 1px solid var(--primary-theme-color);
  cursor: pointer;
  color: var(--primary-theme-color);
  background: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 30px;
  transition: 350ms opacity ease-in-out;
  white-space: nowrap;

  &:hover {
    color: white;
    background: white;
  }

  &::before {
    position: absolute;
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    background: var(--background-color);
    color: white;
    opacity: 0;
    transition: 400ms opacity ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  @media screen and (max-width: 650px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`;

export const ProductsContainer = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  padding: 115px 100px 50px;

  @media screen and (min-width: 601px) and (max-width: 1050px) {
    padding: 115px 70px 50px;
  }

  @media screen and (max-width: 600px) {
    padding: 115px 0px 50px;
  }
`;

export const ProductsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const StyledTitle = styled.div`
  text-align: center;
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  font-weight: 500;
  margin-bottom: 35px;
`;

export const EmptyBox = styled.div`
  text-align: center;
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 500;
  margin-top: 50px;
`;
