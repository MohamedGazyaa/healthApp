import axios from "axios";
import { currentUserActionTypes } from "./currentUserActionTypes";

export const loginFailure = () => {
  return {
    type: currentUserActionTypes.LOGIN_FAILURE,
  };
};
export const fetchCurrentUserRequest = () => {
  return {
    type: currentUserActionTypes.FETCH_CURRENT_USER_REQUEST,
  };
};
export const fetchCurrentUserSuccess = (user) => {
  return {
    type: currentUserActionTypes.FETCH_CURRENT_USER_SUCCESS,
    payload: user,
  };
};
export const fetchCurrentUserfailure = (error) => {
  return {
    type: currentUserActionTypes.FETCH_CURRENT_USER_FAILURE,
    payload: error,
  };
};
export const setCurrentUserSuccess = (user) => {
  return {
    type: currentUserActionTypes.SET_CURRENT_USER_SUCCESS,
    payload: user,
  };
};
export const setCurrentUserFailure = (error) => {
  return {
    type: currentUserActionTypes.SET_CURRENT_USER_FAILURE,
    payload: error,
  };
};
export const setCurrentUserGoalSuccess = (goal) => {
  return {
    type: currentUserActionTypes.SET_CURRENT_USER_GOAL_SUCCESS,
    payload: goal,
  };
};
export const setCurrentUserGoalFailure = (error) => {
  return {
    type: currentUserActionTypes.SET_CURRENT_USER_GOAL_FAILURE,
    payload: error,
  };
};
export const addCurrentUserFoodSuccess = (foodItem) => {
  return {
    type: currentUserActionTypes.ADD_CURRENT_USER_FOOD_SUCCESS,
    payload: foodItem,
  };
};
export const addCurrentUserFoodFailure = (error) => {
  return {
    type: currentUserActionTypes.ADD_CURRENT_USER_FOOD_FAILURE,
    payload: error,
  };
};
export const fetchtUser = (username) => {
  return async (dispatch) => {
    dispatch(fetchCurrentUserRequest);
    await axios
      .get(`http://localhost:8000/users/${username}`)
      .then((response) => {
        const user = response.data;
        dispatch(fetchCurrentUserSuccess(user));
      })
      .catch((error) => {
        const errMessage = error.message;
        dispatch(fetchCurrentUserfailure(errMessage));
      });
  };
};
export const addNewUser = (user) => {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:8000/users`, user)
      .then((response) => {
        console.log(response);
        dispatch(setCurrentUser(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const fetchCurrentUser = () => {
  return async (dispatch) => {
    dispatch(fetchCurrentUserRequest);
    await axios
      .get(`http://localhost:8000/currentUser`)
      .then((response) => {
        const user = response.data;
        dispatch(fetchCurrentUserSuccess(user));
      })
      .catch((error) => {
        const errMessage = error.message;
        dispatch(fetchCurrentUserfailure(errMessage));
      });
  };
};
export const setCurrentUser = (user) => {
  return async (dispatch) => {
    await axios
      .put(`http://localhost:8000/currentUser`, user)
      .then((response) => {
        console.log(response);
        dispatch(setCurrentUserSuccess(user));
      })
      .catch((error) => {
        const errMessage = error.message;
        dispatch(setCurrentUserGoalFailure(errMessage));
      });
  };
};
export const setCurrentUserGoal = (currentUser, newGoal) => {
  return async (dispatch) => {
    await axios
      .put(`http://localhost:8000/currentUser`, { ...currentUser,goal: newGoal })
      .then((response) => {
        console.log(response);
        dispatch(setCurrentUserGoalSuccess(newGoal));
      })
      .catch((error) => {
        const errMessage = error.message;
        dispatch(setCurrentUserGoalFailure(errMessage));
      });
    await axios
      .put(`http://localhost:8000/users/${currentUser.id}`, {...currentUser, goal: newGoal })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
export const addCurrentUserFood = (currentUser, foodItem) => {
  return async (dispatch) => {
    await axios
      .put(`http://localhost:8000/currentUser`, {...currentUser,
        foodItems: [...currentUser.foodItems, foodItem],
        intake: currentUser.intake + foodItem.calories,
      })
      .then((response) => {
        console.log(response);
        dispatch(addCurrentUserFoodSuccess(foodItem));
      })
      .catch((error) => {
        const errMessage = error.message;
        dispatch(addCurrentUserFoodFailure(errMessage));
      });
    await axios
      .put(`http://localhost:8000/users/${currentUser}`, {...currentUser,
        foodItems: [...currentUser.foodItems, foodItem],
        intake: currentUser.intake + foodItem.calories,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
