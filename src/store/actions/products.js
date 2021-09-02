import {
  GET_PRODUCTS,
  GET_PRODUCTS_ELECTRONICS,
  GET_PRODUCTS_JEWELRY,
  GET_PRODUCTS_MEN,
  GET_PRODUCTS_WOMEN,
} from "../types";
import { getProductsApi, getProductsByCategoryApi } from "Src/api/products";

export function getProductByCaterory(serviceType, data) {
  switch (serviceType) {
    case "electronics":
      return {
        type: GET_PRODUCTS_ELECTRONICS,
        data,
      };

    case "jewelery":
      return {
        type: GET_PRODUCTS_JEWELRY,
        data,
      };

    case "men's clothing":
      return {
        type: GET_PRODUCTS_MEN,
        data,
      };

    default:
      return {
        type: GET_PRODUCTS_WOMEN,
        data,
      };
  }
}

export const getProducts = () => async (dispatch) => {
  try {
    const res = await getProductsApi();
    dispatch({
      type: GET_PRODUCTS,
      data: res,
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getProductsByCategory = (category) => async (dispatch) => {
  try {
    const res = await getProductsByCategoryApi(category);
    dispatch(getProductByCaterory(category, res));
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
