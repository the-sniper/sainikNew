import userDetailsReducer from "./user/userDetailsReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  user: userDetailsReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware) &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
