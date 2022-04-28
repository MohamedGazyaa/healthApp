import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./LoginPage.css";
import {
  fetchtUser,
  loginFailure,
  setCurrentUser,
} from "../redux/currentUser/currentUserActions";

function LoginPage({ authenticateAdmin, authenticateUser }) {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  const [incorrect, setIncorrect] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchtUser(userData.name));
    checkCredentials(user);
  };

  const checkCredentials = (user) => {
    if (user.password === userData.password) {
      setIncorrect(false);
      if (user.id === "admin") {
        authenticateAdmin();
        navigate("/admin");
      } else {
        dispatch(setCurrentUser(user));
        authenticateUser();
        navigate("/mainpage");
      }
    } else {
      dispatch(loginFailure);
      setIncorrect(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-window">
        <h3>Login into an existing account</h3>
        <form className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button onClick={handleLogin} className="btn">
            Sign In
          </button>
        </form>
        {incorrect && <p className="shake">Incorrect username or password</p>}
        <Link to="/sign-up" className="new-acc">
          Don't have an account?
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
