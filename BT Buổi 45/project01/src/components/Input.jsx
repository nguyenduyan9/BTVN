import "bootstrap/dist/css/bootstrap.min.css";
import React, { useId, useRef, useState } from "react";
import Number from "./Number";
import { ToastContainer, toast } from "react-toastify";
import useSelector from "../core/useSelector";

export default function Input() {
  const {
    state: { currentValue },
    dispatch,
  } = useSelector();
  const [number, setNumber] = useState("");
  const id = useId();
  // const arrItem = useRef([]);
  const numberRandom = useRef(Math.floor(Math.random() * 99 + 1));
  console.log(numberRandom);

  // console.log(random(100));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(numberRandom.current);
    if (+number === numberRandom.current) {
      toast.success("Chúc mừng Bạn đã chọn chính xác");
      dispatch({ type: "play/currentValue", payLoad: 1 });
    }
    if (+number > numberRandom.current) {
      toast.error("Bạn cần giảm 1 chút!");
      dispatch({ type: "play/currentValue", payLoad: currentValue });
    }
    if (+number < numberRandom.current) {
      toast.error("Bạn cần tăng 1 chút!");
      dispatch({ type: "play/currentValue", payLoad: currentValue });
    }
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <form action="" className="mb-3" onSubmit={handleSubmit}>
        <label htmlFor={id} className="form-label">
          Hãy thử nhập một số
        </label>

        <input
          id={id}
          type="number"
          placeholder="Thử nhập một số"
          className="form-control "
          onChange={handleChange}
        />

        <button className="btn btn-primary">Kiểm Tra</button>
      </form>
    </div>
  );
}
