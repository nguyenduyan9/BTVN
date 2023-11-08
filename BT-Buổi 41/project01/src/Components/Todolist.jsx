import React, { Component } from "react";
import "../acssets/todolist.css";
import Loading from "./Loading";
import { client } from "../api/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        todo: "",
      },

      isLoading: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("yourName")) {
      const yourName = localStorage.getItem("yourName");
      toast.success(`Hello ${yourName}`);
    }
  }

  handleChange = (e) => {
    const data = { ...this.state.form };
    console.log(data);
    data[e.target.name] = e.target.value;

    this.setState({
      form: data,
    });

    console.log(data);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo } = this.state.form;
    this.postTodo(todo);
  };

  postTodo = async (todo) => {
    const apiKey = localStorage.getItem("apiKey");
    console.log(apiKey);
    const { data } = await client.post(`/todos`, { todo: todo }, apiKey);
    console.log(data);
  };

  render() {
    return (
      <div>
        <div className="todo-list">
          <h2>Welcome </h2>
          <form action="" className="todo-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Công việc cần làm..."
              name="todo"
              onChange={this.handleChange}
            />
            <button>Add</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    );
  }
}
