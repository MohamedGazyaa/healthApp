import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Goal from "../components/Goal";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import "./Main.css";
import { fetchCurrentUser } from "../redux/currentUser/currentUserActions";
import { fetchProducts } from "../redux/allProducts/allProductsActions";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="container">
      <Goal />
      <div className="container2">
        <Filters />
        <Cards />
      </div>
    </div>
  );
}

export default Main;
