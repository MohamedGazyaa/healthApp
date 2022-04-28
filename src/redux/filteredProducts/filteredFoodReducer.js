import { ADD_ITEMS } from "./filteredFoodActionsTypes";

const initialState = [];

export const filteredFoodReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_ITEMS:
      return payload;
    default:
      return state;
  }
};
