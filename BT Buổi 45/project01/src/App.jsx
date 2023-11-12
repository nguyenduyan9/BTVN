import React from "react";
import Input from "./components/Input";
import Content from "./components/Content";
import useSelector from "./core/useSelector";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./components/Button";
export default function App() {
  const {
    state: { currentValue },
  } = useSelector();
  return (
    <div>
      <Content />
      {currentValue === 0 ? <Button /> : <Input />}
      <ToastContainer />
    </div>
  );
}
