import Tasks from "../Tasks/Tasks";
import "./columnItem.scss";
import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
export default function ColumnItem({ columnItem, index }) {
  const { _id, tasks, columnName, column } = columnItem;

  const dispatch = useDispatch();

  const handleClickDele = () => {
    dispatch({
      type: "list/deleColumn",
      payload: _id,
    });
  };
  return (
    <>
      <div className="column-item">
        <h3 className="title">
          {columnName}
          <div className="icon-dele" onClick={handleClickDele}>
            <FaTrashCan />
          </div>
        </h3>
        <div className="tasks-form">
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
        </div>
      </div>
      <button className="btn btn-primary btn-item">Add tasks</button>
    </>
  );
}
