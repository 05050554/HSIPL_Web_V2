import React from "react";
import { Route, Navigate } from "react-router-dom";
import Edit from "../Edit/Edit";

const PrivateRoute = (props) => {
  const isLogin = localStorage.getItem("token") ? true : false;
  return isLogin ? <Edit /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
