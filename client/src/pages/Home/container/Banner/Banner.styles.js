import styled from "styled-components";

import images from "../../../../constants/images";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.15)
    ),
    url(${images.banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  .home__banner-details {
    width: 75%;
    height: 100%;
    color: white;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-size: clamp(2.2rem, 5vw, 4rem);
      margin-bottom: 10px;
      font-weight: 700;
    }

    .home__banner-sub-title {
      font-size: clamp(1rem, 2vw, 1.3rem);
      font-weight: 500;
      margin-bottom: 40px;
      div {
        margin-bottom: 5px;
      }
      span {
        font-size: clamp(1.1rem, 3vw, 1.6rem);
        font-weight: bold;
      }
    }
    @media screen and (max-width: 600px) {
      padding-left: 25px;

      .home__banner-sub-title {
        div {
          margin-bottom: 0px;
          line-height: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 950px) {
    height: 60vh;
  }
`;
