import {
  GET_PRODUCTS,
  GET_PRODUCTS_ELECTRONICS,
  GET_PRODUCTS_JEWELRY,
  GET_PRODUCTS_MEN,
  GET_PRODUCTS_WOMEN,
} from "../types";

const initialState = {
  products: [],
  productsByElectronic: [],
  productsByJewelry: [],
  productsByMen: [],
  productsByWomen: [],
  loading: true,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.data,
        loading: false,
      };
    case GET_PRODUCTS_ELECTRONICS:
      return {
        ...state,
        productsByElectronic: action.data,
        loading: false,
      };
    case GET_PRODUCTS_JEWELRY:
      return {
        ...state,
        productsByJewelry: action.data,
        loading: false,
      };
    case GET_PRODUCTS_MEN:
      return {
        ...state,
        productsByMen: action.data,
        loading: false,
      };
    case GET_PRODUCTS_WOMEN:
      return {
        ...state,
        productsByWomen: action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
