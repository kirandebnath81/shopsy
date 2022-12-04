//styles
import {
  ProductsContainer,
  ProductsBox,
  StyledTitle,
  EmptyBox,
} from "../../styles/Main.styles";

import { useProducts } from "../../contexts";
import { Product } from "../../components";
import { useEffect } from "react";

const Wishlist = () => {
  const { wishlist } = useProducts();

  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <ProductsContainer>
      {wishlist.length === 0 ? (
        <EmptyBox>Shopping List is Empty</EmptyBox>
      ) : (
        <>
          <StyledTitle>Shopping List</StyledTitle>
          <ProductsBox>
            {wishlist.map((item) => (
              <Product key={item.id} item={item} type="wishlist" />
            ))}
          </ProductsBox>
        </>
      )}
    </ProductsContainer>
  );
};

export default Wishlist;
