import Tasks from "../Tasks/Tasks";
import "./columnItem.scss";
import React from "react";

export default function ColumnItem({ columnItem, index }) {
  const { _id, tasks, columnName, column } = columnItem;
  return (
    <div className="column-item">
      <h3 className="title">{columnName}</h3>
      <div>
        {tasks.length > 0 &&
          tasks.map((task, index) => {
            return (
              <Tasks
                key={task._id}
                task={task}
                index={index}
                column={column}
                columnName={columnName}
              />
            );
          })}

        <button className="btn">Add tasks</button>
      </div>
    </div>
  );
}
