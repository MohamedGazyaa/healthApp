import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Goal.css";

function Goal() {
  const currentUser = useSelector((state) => state.user.currentUser);
  let caloriesGoal = currentUser.goal;
  let intake = currentUser.intake;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/setGoal");
  };

  return (
    <div className="goal-container">
      <div className="goal-wrapper">
        <h2 className="title">Goal:</h2>
        <div className="calories-goal">
          <h3 className="goal-title">Total calories needed:</h3>
          <h1 className="goal-info">{caloriesGoal}</h1>
          <button onClick={handleClick} className="new-goal-btn">
            Set new goal
          </button>
        </div>
        <div className="remaining-calories">
          <h4 className="goal-title">Remaining calories:</h4>
          <h2 className="goal-info">{caloriesGoal - intake}</h2>
        </div>
      </div>
    </div>
  );
}

export default Goal;
