import React from "react";
import MAX_TIME from "../config/config";
import useSelector from "../core/useSelector";

export default function MaximumPlay() {
  const {
    state: { currentValue },
  } = useSelector();
  // const {
  //   state: { currentPlay },
  // } = useSelector();
  // const currentPlay = 4;
  return (
    <div>
      <h1>Chào mừng Bạn đến với trò chơi đoán số</h1>

      <h3>
        Số lần chơi:
        <span>
          {currentValue} / {MAX_TIME}
        </span>
      </h3>
    </div>
  );
}
