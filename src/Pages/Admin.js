import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/allProducts/allProductsActions";

import "./Admin.css";

function Admin() {
  const [foodItem, setFoodItem] = useState({
    id: "",
    picture: "",
    calories: 0,
    serving: 0,
  });
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addProduct(foodItem));
  };

  return (
    <div className="form-container">
      <div className="form-window">
        <h3>Add food item</h3>
        <form>
          <input
            type="text"
            placeholder="Item name"
            value={foodItem.id}
            onChange={(e) => setFoodItem({ ...foodItem, id: e.target.value })}
          />
          <input
            type="url"
            placeholder="Image link"
            value={foodItem.picture}
            onChange={(e) =>
              setFoodItem({ ...foodItem, picture: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Calories"
            value={foodItem.calories}
            onChange={(e) =>
              setFoodItem({ ...foodItem, calories: Number(e.target.value) })
            }
          />
          <input
            type="number"
            placeholder="Serving Quantity"
            value={foodItem.serving}
            onChange={(e) =>
              setFoodItem({ ...foodItem, serving: Number(e.target.value) })
            }
          />
          <button className="btn" onClick={addItem}>
            Add item
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
