import { ADD_TO_CART } from "../actions/cartAction";
import { REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        return [
          ...state,
          { items: action.payload.items }
        ];
      case REMOVE_FROM_CART:
        return { ...state, items: action.payload.items };
      default:
        return state;
    }
  }