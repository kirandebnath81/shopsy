import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 15px;
  margin-top: 115px;

  @media screen and (max-width: 600px) {
    margin-top: 145px;
    padding: 0 10px;
  }
`;

export const TitleBox = styled.div`
  text-align: center;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 600;
  margin-bottom: 60px;
`;
