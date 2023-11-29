import "./ListColumn.scss";
import React, { useState, useCallback } from "react";
import ColumnItem from "../ColumnItem/ColumnItem";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function ListColumn() {
  const dispatch = useDispatch();
  const listColumn = useSelector((state) => {
    return state.list.listColumn;
  });

  const tasks = useSelector((state) => {
    return state.tasks.tasks;
  });

  const handleClickAdd = useCallback(() => {
    dispatch({
      type: "list/addColumn",
      payload: {
        _id: uuidv4(),
        column: `${
          listColumn.length > 0
            ? String(+listColumn[listColumn.length - 1]?.column + 1)
            : 1
        }`,
        columnName: `column ${listColumn.length + 1}`,
        tasks: [],
      },
    });
  }, [listColumn]);

  return (
    <div className="container">
      <div className="list-column">
        {listColumn.length > 0 &&
          listColumn.map((columnItem, index) => {
            return (
              <div key={columnItem._id}>
                <ColumnItem columnItem={columnItem} index={index} />
              </div>
            );
          })}
        <div>
          <button onClick={handleClickAdd} className="btn btn-primary">
            +Add Column
          </button>
        </div>
      </div>
    </div>
  );
}
