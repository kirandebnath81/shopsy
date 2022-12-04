//icons
import { BiSortAlt2 } from "react-icons/bi";
import { TbAdjustments } from "react-icons/tb";

//styles
import { Container, LeftContainer, RightContainer } from "./Products.styles";

//util for filtering the products
import { filteredProducts } from "../../utils";

//context
import { useFilters, useModal, useProducts } from "../../contexts";

//components
import { Product } from "../../components";
import { Filters, SortPrice, FiltersModal, SortModal } from "./components";
import { useEffect } from "react";

const Products = () => {
  //central state
  const { categoriesFilter, otherFilters, ratingsFilter, sortPricing } =
    useFilters();

  const { openFilters, openSortPrice, setOpenFilters, setOpenSortPrice } =
    useModal();

  const { data, sortData } = useProducts();

  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  //sort price
  const getSortedData = () => {
    if (sortPricing === "ascending") {
      return sortData.sort((a, b) => a.price - b.price);
    } else if (sortPricing === "descending") {
      return sortData.sort((a, b) => b.price - a.price);
    } else {
      return data;
    }
  };

  return (
    <Container>
      {/* opening filter modals for small screen  */}
      {openFilters && <FiltersModal />}
      {openSortPrice && <SortModal />}

      <LeftContainer>
        <Filters />
      </LeftContainer>
      <RightContainer>
        <div className="products__heading">
          <div className="products__title">Collections</div>

          <div className="products__icons">
            <button onClick={() => setOpenSortPrice(true)}>
              <BiSortAlt2 />
            </button>
            <button onClick={() => setOpenFilters(true)}>
              <TbAdjustments />
            </button>
          </div>

          <div className="products__sorting">
            <SortPrice />
          </div>
        </div>
        <div className="products__all-products">
          {getSortedData()?.map((item) => {
            const productComponent = <Product key={item.id} item={item} />;
            return filteredProducts(
              item,
              productComponent,
              categoriesFilter,
              otherFilters,
              ratingsFilter
            );
          })}
        </div>
      </RightContainer>
    </Container>
  );
};

export default Products;
