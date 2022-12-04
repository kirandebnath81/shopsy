import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  padding-top: 130px;
`;

export const Box = styled.div`
  width: clamp(250px, 90%, 400px);
  margin: 0 auto;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const ProfileBox = styled.div`
  margin-bottom: 20px;
  font-weight: 500;

  span {
    font-size: clamp(1rem, 2vw, 1.1rem);
    font-weight: 600;
  }
`;
