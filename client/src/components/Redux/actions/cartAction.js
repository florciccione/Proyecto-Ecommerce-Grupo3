export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (items, product, selectedColor) => (dispatch) => {
    const cartItems = items
    if(cartItems) {
        let productAlreadyInCart = false;
        cartItems.forEach((cp) => {
        if (cp.id === product.id && cp.selectedColor === selectedColor) {
            cp.count += 1;
            productAlreadyInCart = true;
        }
        });
        if (!productAlreadyInCart) {
            cartItems.push( {id:product.id, name:product.name, description:product.description, selectedColor, count: 1} );
        };
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        dispatch({ type: ADD_TO_CART, payload: cartItems});
    }
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