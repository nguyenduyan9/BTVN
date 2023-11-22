import "./ListColumn.scss";
import React from "react";
import ColumnItem from "../ColumnItem/ColumnItem";
import { useSelector } from "react-redux";

export default function ListColumn() {
  const listColumn = useSelector((state) => {
    return state.list.listColumn;
  });

  console.log(listColumn);
  return (
    <div className="list-column">
      {listColumn.length > 0 &&
        listColumn.map((columnItem, index) => {
          return (
            <div key={columnItem._id}>
              <ColumnItem columnItem={columnItem} index={index} />
            </div>
          );
        })}
      <button className="btn btn-primary">+Add Column</button>
    </div>
  );
}
