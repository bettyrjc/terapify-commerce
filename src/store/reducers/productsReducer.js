import { GET_PRODUCTS } from "../types";

const initialState = {
  products: [],
  loading: false,
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
    default:
      return state;
  }
};

export default userReducer;
