import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
  } from "../actions/productsAction";
  
  const initialState = {
    products: [],
    loading: false,
    error: "",
  };
  
  function products(state = initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          error: "",
        };
      case FETCH_PRODUCTS_ERROR:
        return {
          loading: false,
          products: [],
          error: action.payload,
        };
      // case DELETE_PRODUCTS: {
      //   return {
      //     ...state,
      //     products: state.products.filter((product) => {
      //       return product.id !== action.payload.id;
      //     }),
      //   };
      //}
      default:
        return state;
    }
  }
  
  export default products;