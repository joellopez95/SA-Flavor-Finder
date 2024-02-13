

import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  LOGIN,
  LOGOUT,
  ADD_USER,
  ADD_HIDDEN_GEM,
  ADD_FOOD_TRUCK,
  ADD_RESTAURANT,
  ADD_COMMENT,
  ADD_THOUGHT,
} from './actions';

const initialState = {
  categories: [],
  currentCategory: '',
  userData: {},
  // Add initial state for other data if needed
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case LOGIN:
      return {
        ...state,
        userData: action.userData,
      };
    case LOGOUT:
      return {
        ...state,
        userData: {},
      };
    case ADD_USER:
      return {
        ...state,
        userData: action.userData,
      };
    case ADD_HIDDEN_GEM:
      // Add logic to update state with added hidden gem data
      return state;
    case ADD_FOOD_TRUCK:
      // Add logic to update state with added food truck data
      return state;
    case ADD_RESTAURANT:
      // Add logic to update state with added restaurant data
      return state;
    case ADD_COMMENT:
      // Add logic to update state with added comment data
      return state;
    case ADD_THOUGHT:
      // Add logic to update state with added thought data
      return state;
    default:
      return state;
  }
};
