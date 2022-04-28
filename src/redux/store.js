import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer } from "./allProducts/productsReducer";
import { currentUserReducer } from "./currentUser/currentUserReducer";
import { filteredFoodReducer } from "./filteredProducts/filteredFoodReducer";

const reducers = combineReducers({
    products: productsReducer,
    user: currentUserReducer,
    filteredFood: filteredFoodReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)) );
  
  export default store;