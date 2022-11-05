import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "../componets/Users/usersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})


export let store = createStore(rootReducer)

//export type RootStoreType = typeof store
export type ReduxRootStoreType = ReturnType<typeof rootReducer>