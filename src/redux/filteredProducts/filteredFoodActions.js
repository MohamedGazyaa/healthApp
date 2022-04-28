import { ADD_ITEMS } from "./filteredFoodActionsTypes";

export const addFilteredFood = (foodItems) => {
  return {
    type: ADD_ITEMS,
    payload: foodItems,
  };
};
