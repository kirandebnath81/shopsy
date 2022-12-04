import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 115px 100px;

  @media screen and (min-width: 601px) and (max-width: 1050px) {
    padding: 115px 70px;
  }

  @media screen and (max-width: 600px) {
    padding: 115px 0px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
