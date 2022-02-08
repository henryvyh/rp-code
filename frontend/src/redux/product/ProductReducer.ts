import {
  ProductState,
  ProductAction,
  SET_PRODUCTS,
  SET_CATEGORIES,
  SET_QUERY,
} from "./ProductTypes";

const initialState: ProductState = {
  products: [],
  paginate: 1,
  categories: [],
  query: "",
};

const productReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
