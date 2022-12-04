//here value returns the product filtered by category
//by using the value we are invoking another func for filtering products by fast delivery and stock

const setOtherFilters = (otherFilters, item, value) => {
  const { fastDelivery, excludeOutOfStock } = otherFilters;

  const isOutOfStock = getUnavailableItems(item.id);
  const isFastDelivery = getFastDeliveryItems(item.id);

  if (fastDelivery && excludeOutOfStock) {
    return !isOutOfStock && isFastDelivery && value;
  } else if (fastDelivery) {
    return isFastDelivery && value;
  } else if (excludeOutOfStock) {
    return !isOutOfStock && value;
  } else {
    return value;
  }
};

//setting the categories filters
const setCategoriesFilters = (
  categoriesFilter,
  item,
  productComponent,
  targetRating
) => {
  const { mensCloths, womensCloths, jewelry, electronics } = categoriesFilter;

  const rating = item?.rating.rate;
  const category = item?.category;

  if (mensCloths || womensCloths || jewelry || electronics) {
    if (category === `men's clothing`) {
      return mensCloths && rating > targetRating && productComponent;
    } else if (category === `women's clothing`) {
      return womensCloths && rating > targetRating && productComponent;
    } else if (category === `jewelery`) {
      return jewelry && rating > targetRating && productComponent;
    } else if (category === `electronics`) {
      return electronics && rating > targetRating && productComponent;
    }
  } else {
    return rating > targetRating && productComponent;
  }
};

const filteredProducts = (
  item,
  productComponent,
  categoriesFilter,
  otherFilters,
  ratingsFilter
) => {
  const categoriesFilterArgs = [categoriesFilter, item, productComponent];

  if (ratingsFilter === 1) {
    const value = setCategoriesFilters(...categoriesFilterArgs, 0);
    return setOtherFilters(otherFilters, item, value);
  } else if (ratingsFilter === 2) {
    const value = setCategoriesFilters(...categoriesFilterArgs, 1.7);
    return setOtherFilters(otherFilters, item, value);
  } else if (ratingsFilter === 3) {
    const value = setCategoriesFilters(...categoriesFilterArgs, 2.7);
    return setOtherFilters(otherFilters, item, value);
  } else if (ratingsFilter === 4) {
    const value = setCategoriesFilters(...categoriesFilterArgs, 3.7);
    return setOtherFilters(otherFilters, item, value);
  } else if (ratingsFilter === 5) {
    const value = setCategoriesFilters(...categoriesFilterArgs, 4.7);
    return setOtherFilters(otherFilters, item, value);
  } else {
    const value = setCategoriesFilters(...categoriesFilterArgs, 0);
    return setOtherFilters(otherFilters, item, value);
  }
};

//get out of stock products
export function getUnavailableItems(id) {
  return id === 5 || id === 10 || id === 14;
}

//get fast delivery products
export function getFastDeliveryItems(id) {
  return id === 1 || id === 3 || id === 7 || id === 9 || id === 15 || id === 18;
}

export default filteredProducts;
