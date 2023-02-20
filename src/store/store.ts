import {applyMiddleware, combineReducers, Dispatch, legacy_createStore} from "redux";
import {counterReducer} from "../Reducer/counterReducer";
import {setReducer} from "../Reducer/setReducer";
import thunk from "redux-thunk"


export const  rootReducer = combineReducers({
    counter:counterReducer,
    set: setReducer

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


export type RootState = ReturnType<typeof rootReducer>
export const dispatchStore = store.dispatch as Dispatch<any>