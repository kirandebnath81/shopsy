import { useState, useEffect } from "react";

import axios from "axios";

//styles
import { Container, Box } from "./BestSell.styles";
import { TitleBox } from "../../Home.styles";

//component
import { Product } from "../../../../components";

const BestSell = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      const newData = data
        .filter(
          (item) =>
            item.rating.rate > 2.5 &&
            (item.category === "men's clothing" ||
              item.category === "women's clothing")
        )
        .slice(0, 8);

      setData(newData.map((item) => ({ ...item, count: 1 })));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TitleBox>Best Sell Products</TitleBox>
      <Box>
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default BestSell;
