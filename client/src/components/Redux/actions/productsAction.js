import axios from "axios";

// export const GET_PRODUCTS = "GET_PRODUCTS";
// export const ADD_PRODUCTS = "ADD_PRODUCTS";
// export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// export const DELETE_PRODUCTS = "DELETE_PRODUCTS";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

// Funcion creadora de la accion
export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const setProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};
export function getProducts() {
  return (dispatch, getState) => {
    axios.get(`http://localhost:3001/product`).then((response) => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
      // console.log(response.data)
    });
  };
}
/* export const getProducts = () => (dispatch) => {
  axios
    .get("http://localhost:3001/product")
    .then((res) => {
      dispatch(setProductsSuccess(res.data));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchUsersError(errorMsg));
    });
}; */
