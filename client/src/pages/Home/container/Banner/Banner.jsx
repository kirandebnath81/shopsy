//styles
import { Container } from "./Banner.styles";
import { ButtonFill } from "../../../../styles/Main.styles";

import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="home__banner-details">
        <h1>Wear the Best.</h1>

        <div className="home__banner-sub-title">
          <div>Super Value Deals</div>
          <div>
            Upto <span>70% OFF</span> on various prducts
          </div>
        </div>

        <ButtonFill onClick={() => navigate("/explore")}>Shop Now</ButtonFill>
      </div>
    </Container>
  );
};

export default Banner;
