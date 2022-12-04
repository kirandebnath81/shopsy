import styled from "styled-components";

export const Container = styled.div`
  padding: 0 60px 0 15px;
  @media screen and (max-width: 650px) {
    padding: 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 35px 1fr;
    column-gap: 13px;
    row-gap: 30px;

    .filters__left {
      grid-column: 1/2;
    }
    .filters__right {
      grid-column: 2/3;
    }
  }
`;

export const TopContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .filters__title {
    font-weight: 600;
    font-size: 1.1rem;
  }
  .filters__delete {
    small {
      color: red;
      cursor: pointer;
      font-weight: 500;
      font-size: 13px;
      &:hover {
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 650px) {
    grid-column: 1/3;
    margin-bottom: 0px;
    align-items: flex-end;
    .filters__title {
      font-size: 1rem;
      flex-basis: 25%;
      margin-right: 15px;
    }
    .filters__delete {
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      small {
        font-size: 12px;
      }
    }
  }
`;

export const IconContainer = styled.div`
  svg {
    display: block;
    font-size: 1.4rem;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    padding: 5px;
    transition: 230ms background-color ease-in-out;
    &:active {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export const Box = styled.div`
  margin-bottom: 22px;

  .filters__subtitle {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .filters__category {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
    input {
      width: 17px;
      height: 17px;
      margin: 3px;
      cursor: pointer;
    }
    label {
      cursor: pointer;
      user-select: none;
    }
  }

  svg {
    color: red;
    margin-right: 5px;
    font-size: 1.1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 650px) {
    margin-bottom: 18px;
    .filters__subtitle {
      font-size: 12.5px;
    }
    .filters__category {
      font-size: 13px;
    }
    svg {
      margin-right: 7px;
      font-size: 15px;
    }
  }
`;
