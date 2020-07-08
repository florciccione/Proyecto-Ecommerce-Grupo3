export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product) => (dispatch) => {
          dispatch({ type: ADD_TO_CART, payload: product});
      };

  export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({ type: REMOVE_FROM_CART, payload: { items } });
  };
/*
  export const setProductsCart = (products) => {
    return {
      type: ADD_TO_CART,
      payload: products,
    };
  };*/