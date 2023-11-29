import React, { useLayoutEffect } from "react";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import { useSelector, useDispatch } from "react-redux";
import getTasks from "./redux/middlewares/getTasks";
import fetchApi from "./redux/middlewares/fetchApi";
export default function App() {
  const isLogin = useSelector((state) => {
    return state.api.isLogin;
  });
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getTasks(localStorage.getItem("apiKey")));
  }, []);
  return <div>{isLogin ? <Home /> : <Login />}</div>;
}
