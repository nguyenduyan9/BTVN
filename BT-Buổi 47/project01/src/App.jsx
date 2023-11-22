import React from "react";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import { useSelector, useDispatch } from "react-redux";
import getTasks from "./redux/middlewares/getTasks";
export default function App() {
  const isLogin = useSelector((state) => {
    return state.api.isLogin;
  });
  const dispatch = useDispatch();
  dispatch(getTasks(localStorage.getItem("apiKey")));
  // dispatch(getTasks());
  return <div>{isLogin ? <Home /> : <Login />}</div>;
}
