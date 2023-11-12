import React, { createContext, useReducer } from "react";

export const ProviderContext = createContext();
import rootReduce from "./rootReduce";
// import { useReducer } from "react";
import MAX_TIME from "../config/config";

export default function Provider({ children }) {
  const initialValue = {
    currentValue: MAX_TIME,
  };
  const [state, dispatch] = useReducer(rootReduce, initialValue);

  const data = {
    state,
    dispatch,
  };
  return (
    <ProviderContext.Provider value={data}>{children}</ProviderContext.Provider>
  );
}
