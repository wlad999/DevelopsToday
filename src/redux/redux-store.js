import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import potsReducer from "./reducers/postsReducer";

let reducers = combineReducers({
  postsPage: potsReducer
});

const enhancer = applyMiddleware(thunkMiddleware);

let store = createStore(reducers, composeWithDevTools(enhancer));
window.store = store;
export default store;
