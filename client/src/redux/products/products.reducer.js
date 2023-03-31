import {
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./products.type";

export const authInitalState = {
  loading: false,
  prod: [],
  error: false,
};

export const prodReducer = (state = authInitalState, action) => {
  switch (action.type) {
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        prod: action.payload,
      };
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};
