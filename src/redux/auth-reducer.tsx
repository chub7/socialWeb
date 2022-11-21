const SET_USER_DATA = `SET_USER_DATA `

let authInitialState: dataType = {

    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth:false

}
export type  dataType<T = null>= {
    id: number | T,
    email: string | T,
    login: string | T,
    isAuth: boolean

}


export const authReducer = (state = authInitialState, action: ActionType): dataType => {
    switch (action.type) {
        case SET_USER_DATA:
        return {
            ...state,...action.payload,isAuth:true
        }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (   id: number | null,
                                 email: string | null,
                                 login: string | null,) => {
    return {
        type: SET_USER_DATA ,
        payload: {
            id,
            email,
            login
        }
    } as const
}