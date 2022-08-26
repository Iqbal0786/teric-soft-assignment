import { createStore , applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "./Reducers";
const rootReducers= combineReducers({
    Reducers
})

export const store= createStore(rootReducers,applyMiddleware(thunk))

