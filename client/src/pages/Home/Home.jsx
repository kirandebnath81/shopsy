import { useEffect } from "react";

//styles
import { Container } from "./Home.styles";

//components
import { Banner, Categories, BestSell } from "./container";

const Home = () => {
  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Banner />
      <Categories />
      <BestSell />
    </Container>
  );
};

export default Home;
