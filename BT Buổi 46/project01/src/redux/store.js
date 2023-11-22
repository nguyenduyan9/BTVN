import { legacy_createStore as creatStore } from "redux";
import rootReduce from "./rootReduce";

export const store = creatStore(rootReduce);
