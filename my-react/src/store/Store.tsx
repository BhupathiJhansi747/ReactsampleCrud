import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import LoginReducer from "./Reducers/LoginReducer";
const middleware = [thunk];
const rootReducer = combineReducers({
    auth: LoginReducer
})
const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
