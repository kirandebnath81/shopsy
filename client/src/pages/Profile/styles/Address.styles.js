import styled from "styled-components";

export const Container = styled.div`
  width: clamp(250px, 90%, 550px);
  min-height: 85vh;
  margin: 0 auto;
  padding: 115px 0px;
`;

export const AddButton = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 200ms color ease-in-out;

  svg {
    font-size: clamp(1.6rem, 2.5vw, 1.8rem);
    margin-right: 5px;
  }
  span {
    font-size: clamp(1rem, 2vw, 1.1rem);
    font-weight: 600;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;
