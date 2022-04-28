import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector,} from "react-redux";
import './Filters.css'
import { addFilteredFood } from "../redux/filteredProducts/filteredFoodActions";



function Filters() {
  const [search, setSearch] = useState("");
  const [sortMenuActive, setSortMenu] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [filterMin, setFilterMin] = useState("");
  const [filterMax, setFilterMax] = useState("");
  const dispatch = useDispatch();

  const foodList = useSelector((state)=>state.products.foodList)



  
  const filterFood = () => {  
    let filteredList = [...foodList];
    if (sortOption !== "default") {
      switch (sortOption) {
        case "highest":
          filteredList = filteredList.sort((a, b) => b.calories - a.calories);
          break;
        case "lowest":
          filteredList = filteredList.sort((a, b) => a.calories - b.calories);
          break;
        default:
          break;
      }
    }
    if (filterMin !== "") {
      filteredList = filteredList.filter(
        (x) => x.calories >= Number(filterMin)
      );
    }
    if (filterMax !== "") {
      filteredList = filteredList.filter(
        (x) => x.calories <= Number(filterMax)
      );
    }
    if (search !== "") {
      filteredList = filteredList.filter((fooditem) =>
        fooditem.name.includes(search)
      );
    }
    dispatch(addFilteredFood(filteredList));
  };

  useEffect(() => {
    filterFood();
  });

  return (
    <div className="filters-container">
      <div className="filters-wrapper">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search for item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
        <div className="sort-filter">
            <form className="filter-form">
              <label>From:</label>
              <input
                type="number"
                value={filterMin}
                onChange={(e) => setFilterMin(Number(e.target.value))}
              ></input>
              <label>to:</label>
              <input
                type="number"
                value={filterMax}
                onChange={(e) => setFilterMax(Number(e.target.value))}
              ></input>
            </form> 
          <div className="sort">
            <button onClick={() => setSortMenu(!sortMenuActive)}>
              Sort by
              {sortMenuActive ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </button>
            {sortMenuActive && (
              <div className="sort-menu">
                <button onClick={() => setSortOption("default")}>
                  Default{" "}
                  {sortOption === "default" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </button>
                <button onClick={() => setSortOption("highest")}>
                  Highest to lowest{" "}
                  {sortOption === "highest" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </button>
                <button onClick={() => setSortOption("lowest")}>
                  Lowest to highest{" "}
                  {sortOption === "lowest" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
