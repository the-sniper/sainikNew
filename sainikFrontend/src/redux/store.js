import userReducer from "./user/userDetailsReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import register from "./user/registrationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  register: register,
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(ThunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
