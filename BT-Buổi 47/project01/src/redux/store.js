import {
  combineReducers,
  legacy_createStore as createSrore,
  applyMiddleware,
} from "redux";
import Thunk from "redux-thunk";
import tasksReducer from "./reducers/tasksReducer";
import apiReducer from "./reducers/apiReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import listReducer from "./reducers/listReducer";
const rootReducer = combineReducers({
  //   api: apiReducer(),
  api: apiReducer,
  tasks: tasksReducer,
  list: listReducer,
});

export const store = createSrore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);
// console.log(store);
