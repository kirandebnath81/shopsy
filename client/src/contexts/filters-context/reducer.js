import { ACTION_TYPE } from "./actions";

export const FiltersReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_RATINGS_FILTER:
      return {
        ...state,
        ratingsFilter: action.value,
      };
    case ACTION_TYPE.SORT_PRICE:
      return {
        ...state,
        sortPricing: action.value,
      };
    case ACTION_TYPE.SET_CATEGORIES_FILTER:
      return {
        ...state,
        categoriesFilter: {
          ...state.categoriesFilter,
          [action.value.name]: action.value.checked,
        },
      };
    case ACTION_TYPE.SET_OTHER_FILTERS:
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          [action.value.name]: action.value.checked,
        },
      };
    case ACTION_TYPE.CLEAR__FILTERS:
      return {
        sortPrice: "",

        categoriesFilter: {
          mensCloths: "",
          womensCloths: "",
          jewelry: "",
          electronics: "",
        },
        otherFilters: {
          fastDelivery: "",
          excludeOutOfStock: "",
        },
        ratingsFilter: 0,
      };

    default:
      return state;
  }
};
