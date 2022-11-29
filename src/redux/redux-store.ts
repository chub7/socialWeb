import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer, ProfileReducerActionTypes} from "./profileReducer";
import {dialogsReducer, DialogsReducerActionsTypes} from "./dialogsReducer";
import {usersReducer, UsersReducerActionsType} from "../componets/Users/usersReducer";
import {authReducer, AuthReducerActionsType} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
export type ReduxRootStoreType = ReturnType<typeof rootReducer>
export type AppActionsType = ProfileReducerActionTypes | DialogsReducerActionsTypes | AuthReducerActionsType | UsersReducerActionsType
export type AppThunkType = ThunkAction<void, ReduxRootStoreType, unknown, AppActionsType>
//@ts-ignore
window.store = store
