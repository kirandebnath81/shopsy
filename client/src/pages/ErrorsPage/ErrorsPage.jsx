//img
import images from "../../constants/images";

//styles
import { Container } from "./ErrorsPage.styles";
import { ButtonFill } from "../../styles/Main.styles";
//router
import { useNavigate } from "react-router-dom";

const ErrorsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="error__img">
        <img src={images.errorImg} alt="pageNotFound" />
      </div>
      <div className="error__text">
        <h1>We have looked everywhere</h1>
        <div>Looks like the page is missing</div>
        <ButtonFill onClick={() => navigate("/")}>Go to home page</ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorsPage;
