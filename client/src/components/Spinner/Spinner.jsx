import styled from "styled-components";

import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Box>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="var(--primary-theme-color)"
        visible={true}
      />
    </Box>
  );
};

export default Spinner;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
