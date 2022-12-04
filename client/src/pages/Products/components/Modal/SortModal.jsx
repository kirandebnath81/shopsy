//icon
import { HiOutlineX } from "react-icons/hi";

//styles
import { Container, Box, ModalContainer } from "./styles/Modal.styles";
import { IconContainer } from "../Filters/styles/Filters.styles";

//custom-hook
import { useClickOutside, useResize } from "../../../../custom-hook";

//context
import { useModal, useFilters, ACTION_TYPE } from "../../../../contexts";

const SortModal = () => {
  const { setOpenSortPrice } = useModal();
  const { sortPricing, dispatch } = useFilters();

  //custom-hooks
  const nodeRef = useClickOutside(() => {
    setOpenSortPrice(false);
  });

  //closing filter modal  in the large screen
  useResize(() => setOpenSortPrice(false));

  const sortHandler = (e) => {
    dispatch({ type: ACTION_TYPE.SORT_PRICE, value: e.target.value });
  };

  return (
    <Container>
      <Box ref={nodeRef}>
        <ModalContainer>
          <div className="sort__top">
            <div className="sort__title">SORT</div>
            <IconContainer onClick={() => setOpenSortPrice(false)}>
              <HiOutlineX />
            </IconContainer>
          </div>

          <div className="sort__type">
            <input
              type="radio"
              name="sortPricing"
              value=""
              checked={sortPricing === ""}
              id="default"
              onChange={(e) => sortHandler(e)}
            />
            <label htmlFor="default"> Default</label>
          </div>
          <div className="sort__type">
            <input
              type="radio"
              name="sortPricing"
              value="ascending"
              checked={sortPricing === "ascending"}
              id="ascen"
              onChange={(e) => sortHandler(e)}
            />
            <label htmlFor="ascen"> Price : Low to High</label>
          </div>
          <div className="sort__type">
            <input
              type="radio"
              name="sortPricing"
              value="descending"
              checked={sortPricing === "descending"}
              id="descen"
              onChange={(e) => sortHandler(e)}
            />
            <label htmlFor="descen"> Price : High to Low</label>
          </div>
        </ModalContainer>
      </Box>
    </Container>
  );
};

export default SortModal;
