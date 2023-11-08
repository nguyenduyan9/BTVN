import "../acssets/login.css";
import { client } from "../api/client";
import { config } from "../api/config";
const { SERVER_API } = config;

import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import TodoList from "./TodoList";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "duyan@gmail.com",
      },
      isConfirm: false,
      isLoading: false,
    };
  }
  handleConfirm = async (value) => {
    // value = value.replace("@", "%40");
    const yourName = value;
    const { data } = await client.get(`/api-key?email=${value}`);
    console.log(data);
    if (data.code === 200) {
      this.setState({
        isLoading: false,
        isConfirm: true,
      });
      const apiKey = data.data.apiKey;
      localStorage.setItem("apiKey", apiKey);
      localStorage.setItem("yourName", yourName);
      console.log(localStorage);
    } else {
      toast.error(data.message);
      this.setState({
        isLoading: false,
      });
    }
  };

  handleChange = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;

    this.setState({
      form: data,
    });
    // this.setState({
    //   [e.target.nam]: e.target.value,
    // });
    // console.log(form);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state.form;
    this.handleConfirm(email);
    this.setState({
      isLoading: true,
    });
  };

  render() {
    const { isLoading, isConfirm } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : ""}
        {isConfirm ? (
          <TodoList />
        ) : (
          <div className="login">
            <h2>Vui lòng đăng nhập Email</h2>
            <form action="" className="form-login" onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email..."
                required
                onChange={this.handleChange}
              />
              <button>Submit</button>
            </form>
            <ToastContainer />
          </div>
        )}
      </div>
    );
  }
}
