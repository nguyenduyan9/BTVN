import "./login.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchApi from "../../redux/middlewares/fetchApi";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchApi(email));
  };
  return (
    <div className="login" onSubmit={handleSubmit}>
      <h2>Enter the Email!</h2>
      <form action="" className="login-form">
        <input
          type="email"
          placeholder="Nhập Email..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
