import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SetGoal from "./Pages/SetGoal";
import Admin from "./Pages/Admin";
import Main from "./Pages/Main";
import { useState, useE, useEffect } from "react";

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  
  useEffect(()=>{
    const u = localStorage.getItem("user");
    const a = localStorage.getItem("admin");
    u && JSON.parse(u) ? setUserAuthenticated(true) : setUserAuthenticated(false);
    a && JSON.parse(a) ? setAdminAuthenticated(true) : setAdminAuthenticated(false);
  },[])
  useEffect(()=>{

    localStorage.setItem("user",userAuthenticated);
    localStorage.setItem("admin",adminAuthenticated);
  },[userAuthenticated,adminAuthenticated])

  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route
            path="/"
            element={
              <LoginPage
                authenticateAdmin={() => setAdminAuthenticated(true)}
                authenticateUser={() => setUserAuthenticated(true)}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <SignUp authenticateUser={() => setUserAuthenticated(true)} />
            }
          />

          {adminAuthenticated && <Route path="/admin" element={<Admin />} />}

          {userAuthenticated && (
            <>
              <Route path="/setGoal" element={<SetGoal />} />
              <Route path="/mainpage" element={<Main />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
