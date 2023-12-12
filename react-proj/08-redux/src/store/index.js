import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
//key값과 함께 넘겨줘야한다. 하고싶은대로. 여기서는 counter.

const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
});

export default rootReducer;
