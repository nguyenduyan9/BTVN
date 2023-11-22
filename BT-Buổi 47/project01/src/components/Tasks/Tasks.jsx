import "./tasks.scss";
import React from "react";

export default function Tasks({ task, index, column, columnName }) {
  const { _id, content } = task;
  return (
    <>
      <div className="task">
        <p>{content}</p>
      </div>
    </>
  );
}
