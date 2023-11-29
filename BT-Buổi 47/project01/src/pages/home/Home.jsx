import React from "react";
import ListColumn from "../../components/ListColumn/ListColumn";
import { useSelector } from "react-redux";

export default function Home() {
  const listColumn = useSelector((state) => {
    return state.list.listColumn;
  });

  return (
    <div>
      <ListColumn />
    </div>
  );
}
