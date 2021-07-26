import { combineReducers, createStore } from "redux";
import AuthReducer from "./reducers/auth";
import listReducer from "./reducers/list";

const reducers = combineReducers({
  auth: AuthReducer,
  list: listReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
