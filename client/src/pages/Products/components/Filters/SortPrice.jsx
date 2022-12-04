//styles
import { Container } from "./styles/SortPrice.styles";

//context
import { useFilters, ACTION_TYPE } from "../../../../contexts";

const SortPrice = () => {
  const { sortPricing, dispatch } = useFilters();

  //sorting price
  const sortHandler = (e) => {
    dispatch({ type: ACTION_TYPE.SORT_PRICE, value: e.target.value });
  };

  return (
    <Container>
      <select
        name="PricingOrder"
        value={sortPricing}
        onChange={(e) => sortHandler(e)}
      >
        <option value="">Default</option>
        <option value="ascending">Price : Low to High</option>
        <option value="descending">Price : High to Low</option>
      </select>
    </Container>
  );
};

export default SortPrice;
