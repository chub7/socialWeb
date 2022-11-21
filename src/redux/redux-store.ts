import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "../componets/Users/usersReducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer)
export type ReduxRootStoreType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
