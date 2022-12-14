import {AppThunkType} from "./redux-store";
import {authApi} from "../api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = `SET_USER_DATA `

let authInitialState: dataType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}
export type  dataType<T = null> = {
    id: number | T,
    email: string | T,
    login: string | T,
    isAuth: boolean
}

export const authReducer = (state = authInitialState, action: AuthReducerActionsType): dataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,...action.payload, isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}

export type AuthReducerActionsType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number | null,
                              email: string | null,
                              login: string | null,
                              isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

// thunk

export const getAuthUserData = (): AppThunkType => async (dispatch) => {
    let response = await authApi.authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserDataAC(id, email, login, true))
    }

}

export const login = (email:string, password: string, rememberMe:boolean):AppThunkType => {
    return async (dispatch) => {
        let response = await authApi.logIn(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {

            dispatch(stopSubmit("login", {_error: `${response.data.messages[0]}`}))
        }

    }
}
export const logOut = (): AppThunkType => async (dispatch) => {
    let response = await authApi.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}
