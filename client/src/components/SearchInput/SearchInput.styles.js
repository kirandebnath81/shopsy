import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: 35px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search__icon {
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--secondary-background-color);
  }
  .search__icon--cross {
    height: 100%;
    flex-basis: 7%;
    min-width: 25px;
    display: flex;
    justify-content: flex-start;
    font-weight: 500;
    font-size: 1.2rem;
  }
  .search__icon--search {
    flex-basis: 10%;
    min-width: 35px;
    max-width: 45px;
    height: 100%;
    font-size: 1.3rem;
    border-left: 1px solid black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: var(--hover-background-color);
    color: var(--text-color);
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  height: 100%;
  text-indent: 15px;
  border: none;
  user-select: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 1.05rem;
  background-color: var(--secondary-background-color);
  color: var(--text-color);
`;
