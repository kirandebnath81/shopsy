//icon
import { HiOutlineX } from "react-icons/hi";

//style
import {
  Container,
  Box,
  TopContainer,
  IconContainer,
} from "./styles/Filters.styles";

//util
import { getStarIcons } from "../../../../utils";

//context
import { useFilters, useModal, ACTION_TYPE } from "../../../../contexts";

const Filters = () => {
  const { categoriesFilter, otherFilters, ratingsFilter, dispatch } =
    useFilters();

  const { setOpenFilters } = useModal();

  const { mensCloths, womensCloths, jewelry, electronics } = categoriesFilter;
  const { fastDelivery, excludeOutOfStock } = otherFilters;

  //set filters
  const handler = (type, value) => dispatch({ type: ACTION_TYPE[type], value });

  //categories filters
  const categoriesHandler = (e) => {
    const { name, checked } = e.target;
    handler("SET_CATEGORIES_FILTER", { name, checked });
  };

  //other filters
  const changeHandler = (e) => {
    const { name, checked } = e.target;
    handler("SET_OTHER_FILTERS", { name, checked });
  };

  //ratings filter
  const getRatingsFilter = () => {
    return getStarIcons(ratingsFilter).map((star, i) => (
      <span key={i} onClick={() => handler("SET_RATINGS_FILTER", i + 1)}>
        {star}
      </span>
    ));
  };

  return (
    <Container>
      <TopContainer>
        <div className="filters__title">FILTERS</div>
        <div className="filters__delete">
          <small onClick={() => dispatch({ type: ACTION_TYPE.CLEAR__FILTERS })}>
            CLEAR ALL
          </small>
          <IconContainer onClick={() => setOpenFilters(false)}>
            <HiOutlineX />
          </IconContainer>
        </div>
      </TopContainer>

      <div className="filters__left">
        <Box>
          <div className="filters__subtitle">CATEGORIES</div>
          <div className="filters__category">
            <input
              type="checkbox"
              name="mensCloths"
              id="men"
              checked={mensCloths}
              onChange={(e) => categoriesHandler(e)}
            />
            <label htmlFor="men"> Men's Clothing</label>
          </div>
          <div className="filters__category">
            <input
              type="checkbox"
              name="womensCloths"
              id="women"
              checked={womensCloths}
              onChange={(e) => categoriesHandler(e)}
            />
            <label htmlFor="women"> Women's Clothing</label>
          </div>
          <div className="filters__category">
            <input
              type="checkbox"
              name="jewelry"
              id="jewelry"
              checked={jewelry}
              onChange={(e) => categoriesHandler(e)}
            />
            <label htmlFor="jewelry"> Jewelry</label>
          </div>
          <div className="filters__category">
            <input
              type="checkbox"
              name="electronics"
              id="electronics"
              checked={electronics}
              onChange={(e) => categoriesHandler(e)}
            />
            <label htmlFor="electronics"> Electronics</label>
          </div>
        </Box>
      </div>

      <div className="filters__right">
        <Box>
          <div className="filters__subtitle">OTHERS</div>
          <div className="filters__category">
            <input
              type="checkbox"
              name="fastDelivery"
              id="delivery"
              checked={fastDelivery}
              onChange={(e) => changeHandler(e)}
            />
            <label htmlFor="delivery"> Fast Delivery</label>
          </div>
          <div className="filters__category">
            <input
              type="checkbox"
              name="excludeOutOfStock"
              id="stock"
              checked={excludeOutOfStock}
              onChange={(e) => changeHandler(e)}
            />
            <label htmlFor="stock"> Exclude out of stock</label>
          </div>
        </Box>
        <Box>
          <div className="filters__subtitle">RATINGS</div>
          <div>{getRatingsFilter()}</div>
        </Box>
      </div>
    </Container>
  );
};

export default Filters;
