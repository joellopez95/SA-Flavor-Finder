import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  LOGIN,
  LOGOUT,
  ADD_USER,
  ADD_HIDDEN_GEM,
  ADD_FOOD_TRUCK,
  ADD_RESTAURANT,
  ADD_RECOMMENDATION,
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
      return {
        ...state,
        hiddenGems: [...state.hiddenGems, action.hiddenGem], // Assuming hiddenGems is an array in state
      };
    case ADD_FOOD_TRUCK:
      return {
        ...state,
        foodTrucks: [...state.foodTrucks, action.foodTruck], // Assuming foodTrucks is an array in state
      };
    case ADD_RESTAURANT:
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant], // Assuming restaurants is an array in state
      };
    case ADD_RECOMMENDATION:
      return {
        ...state,
        recommendations: [...state.recommendations, action.recommendation], // Assuming recommendations is an array in state
      };
    case ADD_THOUGHT:
      return {
        ...state,
        thoughts: [...state.thoughts, action.thought], // Assuming thoughts is an array in state
      };
    default:
      return state;
  }
};
