import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 20px;
  margin-top: 100px;

  .categories__items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .categories__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: min(43%, 240px);
      height: 100%;
      margin-bottom: 30px;
      position: relative;
      cursor: pointer;
      transition: 300ms transform ease-in-out;
      img {
        width: 100%;
        border-radius: 12px;
      }

      div {
        opacity: 0;
        position: absolute;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 12px;
        transition: 250ms opacity ease-in;
        font-weight: 500;
        letter-spacing: 0.5px;
        font-size: clamp(12px, 1.5vw, 1rem);

        &:hover {
          opacity: 1;
        }
      }

      &:hover {
        transform: scale(1.04);
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;
