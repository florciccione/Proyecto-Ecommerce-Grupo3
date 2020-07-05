import { combineReducers } from "redux";
import products from "./productsReducer";
import categories from "./categoryReducer";

const rootReducer = combineReducers({
  products,
  categories,
});
export default rootReducer;