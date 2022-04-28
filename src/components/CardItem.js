import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUserFood } from "../redux/currentUser/currentUserActions";
import "./Cards.css";

function CardItem(props) {
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.user.currentUser);

  const addFoodItem = (e) => {
    e.preventDefault();
    let maxAllowedCallories = currentUser.goal - currentUser.intake;
    let item = { name: props.name, calories: props.calories };
    if (props.calories < maxAllowedCallories) {
      dispatch(addCurrentUserFood(currentUser, item));
    }
  };
  return (
    <div className="food-card">
      <figure className="cards__item__pic-wrap" data-category={props.name}>
        <img src={props.src} alt={props.name} className="cards__item__img" />
      </figure>
      <div className="food-info">
        <h5 className="food-calories">{props.text}</h5>
        <button onClick={addFoodItem} className="add-btn">
          Add item
        </button>
      </div>
    </div>
  );
}

export default CardItem;
