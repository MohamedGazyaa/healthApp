import { productsActionTypes } from "./productsActionTypes";

const initialState = {
  isLoading: false,
  foodList: [],
  error: "",
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productsActionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case productsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        foodList: payload,
        error: "",
      };
    case productsActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case productsActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        foodList: [...state.foodList, payload],
      };
    case productsActionTypes.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
