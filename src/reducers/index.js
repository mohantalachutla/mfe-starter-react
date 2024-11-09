import { combineReducers } from "redux";

import helloReducer from "./hello";
import loaderReducer from "./loader";
import modalReducer from "./modal";

export default combineReducers({
  hello: helloReducer,
  loader: loaderReducer,
  model: modalReducer,
});
