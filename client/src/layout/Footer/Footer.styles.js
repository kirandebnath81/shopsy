import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .footer__title {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: clamp(1rem, 2vw, 1.1rem);
    svg {
      color: var(--primary-theme-color);
      font-size: 1.4rem;
      margin: 0 5px;
    }
  }

  .footer__media {
    margin: 25px 0 35px;
    svg {
      font-size: clamp(1.3rem, 2.2vw, 1.5rem);
      margin-right: 30px;
      transition: 250ms color ease-in-out;

      &:hover {
        color: var(--primary-theme-color);
      }
    }
  }

  .footer__copyright {
    font-size: clamp(13.5px, 1.5vw, 15px);
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
`;
