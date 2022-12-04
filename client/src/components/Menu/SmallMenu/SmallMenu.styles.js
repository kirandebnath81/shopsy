import styled from "styled-components";

export const Container = styled.div`
  width: 230px;
  position: absolute;
  top: 50px;
  right: 0px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);

  .menu__header {
    box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
    padding: 10px 0px;
  }

  .menu__items {
    padding: 10px 0px;
    div {
      font-weight: 500;
      cursor: pointer;
      padding: 8px 12px;
      transition: 250ms background-color ease-in-out;
      color: rgba(0, 0, 0, 0.75);
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }
`;
