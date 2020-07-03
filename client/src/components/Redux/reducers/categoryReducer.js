import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR,
    FILTER_CATEGORIES,
    SHOW_CATEGORIES,
  } from "../actions/categoryAction";
  
  const initialState = {
    categories: [],
    loading: false,
    error: "",
  };
  
  function categories(state = initialState, action) {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CATEGORIES_SUCCESS:
        return {
          loading: false,
          categories: action.payload,
          error: "",
        };
      case FETCH_CATEGORIES_ERROR:
        return {
          loading: false,
          categories: [],
          error: action.payload,
        };
      case FILTER_CATEGORIES:
        return {
          loading: false,
          categories: [],
          error: action.payload,
        };  
      // case DELETE_CATEGORIES: {
      //   return {
      //     ...state,
      //     categories: state.categories.filter((categories) => {
      //       return categories.id !== action.payload.id;
      //     }),
      //   };
      //}
      default:
        return state;
    }
  }
  
  export default categories;