import { productsActionTypes } from "./productsActionTypes";
import axios from "axios";

export const addProductSuccess = (product) => {
  return {
    type: productsActionTypes.ADD_PRODUCT_SUCCESS,
    payload: product,
  };
};
export const addProductFailure = (error) => {
  return {
    type: productsActionTypes.ADD_PRODUCT_FAILURE,
    payload: error,
  };
};
export const fetchPorductsSuccess = (products) => {
  return {
    type: productsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};
export const fetchPorductsFailure = (error) => {
  return {
    type: productsActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProductsRequest = () => {
  return {
    type: productsActionTypes.FETCH_PRODUCTS_REQUEST,
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:8000/foodItems", product)
      .then((response) => {
        const res = response.data;
        dispatch(addProductSuccess(product));
      })
      .catch((error) => {
        let errMessage = error.message;
        dispatch(addProductFailure(errMessage));
      });
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest);
    await axios
      .get("http://localhost:8000/foodItems")
      .then((response) => {
        const products = response.data;
        dispatch(fetchPorductsSuccess(products));
      })
      .catch((error) => {
        const errMessage = error.message;
        dispatch(fetchPorductsFailure(errMessage));
      });
  };
};
