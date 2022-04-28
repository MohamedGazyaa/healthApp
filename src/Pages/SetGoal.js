import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./setGoal.css";
import {
  fetchCurrentUser,
  setCurrentUserGoal,
} from "../redux/currentUser/currentUserActions";

function SetGoal() {
  const [calories, setCalories] = useState(0);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  const handleGoal = (e) => {
    e.preventDefault();
    dispatch(setCurrentUserGoal(user, calories));
    navigate("/mainpage");
  };

  return (
    <div className="form-container">
      <div className="form-window">
        <h3>Set your Goal!!!</h3>
        <form>
          <input
            type="number"
            placeholder="Calories goal"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
          />
          <Link to="/mainpage">
            <button className="btn" onClick={handleGoal}>
              Set Goal
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SetGoal;
