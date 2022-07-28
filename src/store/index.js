import { combineReducers } from "redux";
import { createStore } from "redux";
import { dataToggle, Array, Object } from "./reducer.js";
const rootReducer = combineReducers({
  dataToggle,
  Array,
  Object,
});
export const Store = createStore(rootReducer);
