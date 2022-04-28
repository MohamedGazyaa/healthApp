import { currentUserActionTypes } from "./currentUserActionTypes";

const initialState = {
  isLoading: false,
  currentUser: {},
  error: "",
};
export const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case currentUserActionTypes.FETCH_CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case currentUserActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        currentUser: {},
      };
    case currentUserActionTypes.FETCH_CURRENT_USER_SUCCESS:
      return {
        isLoading: false,
        currentUser: payload,
        error: "",
      };
    case currentUserActionTypes.FETCH_CURRENT_USER_FAILURE:
      return {
        isLoading: false,
        currentUser: {},
        error: payload,
      };
    case currentUserActionTypes.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: "",
      };
    case currentUserActionTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case currentUserActionTypes.SET_CURRENT_USER_GOAL_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, goal: payload },
        error: "",
      };
    case currentUserActionTypes.SET_CURRENT_USER_GOAL_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case currentUserActionTypes.ADD_CURRENT_USER_FOOD_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          foodItems: [...state.currentUser.foodItems, payload],
          intake: state.currentUser.intake + payload.calories,
        },
        error: "",
      };
    case currentUserActionTypes.ADD_CURRENT_USER_FOOD_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
