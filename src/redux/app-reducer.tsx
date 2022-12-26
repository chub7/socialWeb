import { AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = `INITIALIZED_SUCCESS`

let appInitialState = {
    initialized: false
}

type AppInitialStateType = typeof appInitialState

export const appReducer = (state = appInitialState, action: AppReducerActionsType): AppInitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            debugger
            return {...state, initialized: true}
        default:
            return state
    }
}

export type AppReducerActionsType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)


// thunk

export const initializeApp = (): AppThunkType => {
    return (dispatch: any) => {
         let promise = dispatch(getAuthUserData())

        promise.then(() => {
            dispatch(initializedSuccess())
        })

    }

}