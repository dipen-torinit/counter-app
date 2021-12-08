import { createStore, combineReducers } from "redux";
import { counterReducer } from "../reduxstore/Reducers";

const reducer = combineReducers({
  counterReducer: counterReducer,
});

export const store = createStore(reducer);
