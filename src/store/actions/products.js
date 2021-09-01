import { GET_PRODUCTS } from "../types";
import { get } from "Src/api/products";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await get();
    dispatch({
      type: GET_PRODUCTS,
      data: res,
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
