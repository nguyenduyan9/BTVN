import "./tasks.scss";
import React, { useState } from "react";

export default function Tasks({ task, index, column, columnName }) {
  const { _id, content } = task;
  const [valueInput, setValueInput] = useState(content);
  return (
    <div>
      <form className="task" action="">
        <textarea value={valueInput} name="" id="" />
      </form>
    </div>
  );
}
