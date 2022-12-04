//styled
import {
  ProductsContainer,
  ProductsBox,
  StyledTitle,
  EmptyBox,
} from "../../styles/Main.styles";

import { useParams } from "react-router-dom";

import { useProducts } from "../../contexts";

import { Product } from "../../components";

const Search = () => {
  const { searchedItem } = useParams();
  const { data } = useProducts();

  const searchResult = () => {
    return data.filter((item) =>
      Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchedItem.toLowerCase())
    );
  };

  return (
    <ProductsContainer>
      {searchResult().length === 0 ? (
        <EmptyBox>No Results Found</EmptyBox>
      ) : (
        <>
          <StyledTitle>Search Result</StyledTitle>
          <ProductsBox>
            {searchResult()?.map((item) => (
              <Product key={item.id} item={item} type="wishlist" />
            ))}
          </ProductsBox>
        </>
      )}
    </ProductsContainer>
  );
};

export default Search;
