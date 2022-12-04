import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 6;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: clamp(250px, 92%, 400px);
  border-radius: 10px;
  background-color: white;
  padding: 15px 15px 10px 15px;
`;

//Sort modal only
export const ModalContainer = styled.div`
  margin-bottom: 22px;

  .sort__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;

    .sort__title {
      font-size: 15px;
      font-weight: 600;
    }
  }

  .sort__type {
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
      margin-left: 5px;
    }
  }
`;
