import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
  const foodProducts = useSelector((state) => state.filteredFood);
  return (
    <div className="cards">
      <ul className="cards-container">
        {foodProducts.map((foodItem) => (
          <li>
            <CardItem
              name={foodItem.id}
              src={foodItem.picture}
              calories={foodItem.calories}
              text={
                "Calories: " +
                foodItem.calories +
                "cal/" +
                foodItem.serving +
                "g"
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
