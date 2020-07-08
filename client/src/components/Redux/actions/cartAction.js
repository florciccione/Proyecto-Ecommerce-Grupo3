export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_PRODUCT = "CLEAR_PRODUCT";

export const addToCart = (product) => (dispatch) => {
          dispatch({ type: ADD_TO_CART, payload: product});
      };

export const clearProduct = (product) => (dispatch) => {
  // console.log("Inside clear products");
  console.log("Product: ", product);
  dispatch({
    type: CLEAR_PRODUCT,
    payload: product,
  });
};
