import { createContext, useContext, useReducer } from "react";

//reducer
import { FiltersReducer } from "./reducer";

//context
export const FiltersContext = createContext();

//state
const initialState = {
  sortPricing: "",

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

//provider
export const FiltersProvider = ({ children }) => {
  const [filters, dispatch] = useReducer(FiltersReducer, initialState);

  const { sortPricing, categoriesFilter, otherFilters, ratingsFilter } =
    filters;

  return (
    <FiltersContext.Provider
      value={{
        sortPricing,
        categoriesFilter,
        otherFilters,
        ratingsFilter,
        dispatch,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

// custom-hook for consuming context
export const useFilters = () => useContext(FiltersContext);
