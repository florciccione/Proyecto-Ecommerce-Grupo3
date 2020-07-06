import { combineReducers } from "redux";
import products from "./productsReducer";
import categories from "./categoryReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  products,
  categories,
  cart
});
export default rootReducer;
