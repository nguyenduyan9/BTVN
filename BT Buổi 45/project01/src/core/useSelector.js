import { ProviderContext } from "./Provider";
import { useContext } from "react";
import React from "react";

export default function useSelector() {
  return useContext(ProviderContext);
}
