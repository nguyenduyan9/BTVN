import React from "react";
import useSelector from "../core/useSelector";
import MAX_TIME from "../config/config";
export default function Button() {
  const {
    state: { currentValue },
    dispatch,
  } = useSelector();
  const handleClick = () => {
    dispatch({ type: "play/reset", payLoad: MAX_TIME });
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Chơi lại
      </button>
    </div>
  );
}
