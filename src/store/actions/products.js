import { GET_PRODUCTS } from "../types";
import { get } from "Src/api/products";
import { toast } from "react-toastify";


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

export const pushInShoppingCar = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SHOPPING_CAR,
      payload: data,
    });

    localStorage.setItem("productsInCar", JSON.stringify(data));
  } catch (err) {
    toast.error("Hubo un problema :(");
    return Promise.reject(err);
  }
};