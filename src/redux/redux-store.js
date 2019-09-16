import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import potsReducer from "./reducers/postsReducer";

let reducers = combineReducers({
  postsPage: potsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
