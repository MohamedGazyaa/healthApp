import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNewUser } from "../redux/currentUser/currentUserActions";
import "./SignUp.css";

function SignUp({authenticateUser}) {
  const [fail, setFail] = useState(false);
  const [cpwd, setCpwd] = useState("");
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    password: "",
    goal: 0,
    intake: 0,
    foodItems: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (userData.password === cpwd) {
      setFail(false);
      dispatch(addNewUser(userData));
      authenticateUser();
      navigate("/setGoal");
    } else {
      setFail(true);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-window">
        <h3>Create a new account</h3>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={userData.id}
            onChange={(e) => setUserData({ ...userData, id: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={cpwd}
            onChange={(e) => setCpwd(e.target.value)}
          />
          <button className="btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>

        {fail && <p className="shake">Passwords don't match</p>}
        <Link to="/" className="new-acc">
          Already have an account?
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
