
const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'



export type usersInitialStateTypeNew = {
    items: Array<UsersType>
    totalCount: number,
    error: string
}

export type UsersType = {
    name: string,
    id: number,
    photos: photosType
    status: string,
    followed: boolean
}

type photosType = {
    small: string,
    large: string
}
//export type usersInitialStateType =  typeof usersInitialState;
// type locationType ={
//     city:string,
//     country:string
// }
//
// export type usersType ={
//     id:string,
//     photoUrl:string,
//     followStatus: boolean,
//     fullName: string,
//     status: string,
//     location: locationType
// }
//
// let usersInitialState = {
//    users: [
//        {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: true, fullName: `Dmitry`, status: `free`, location: {city: `Minsk`, country: `Bel`}},
//        {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: true, fullName: `Julia`, status: `busy`, location: {city: `Hrodno`, country: `Bel`}},
//        {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: false, fullName: `Artem`, status: `work`, location: {city: `Moskwa`, country: `Rus`}},
//        {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: false, fullName: `Maks`, status: `student`, location: {city: `Kiev`, country: `Ukr`}},
// ] as Array<usersType>
// }
let usersInitialState = {
    items: [],
    totalCount: 0,
    error: ''

}

export const usersReducer = (state: usersInitialStateTypeNew = usersInitialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.items.map(e => e.id === action.payload.userId ? {...e, followStatus: true} : e)
            }
        case UN_FOLLOW :
            return {
                ...state,
                users: state.items.map(e => e.id === action.payload.userId ? {...e, followStatus: false} : e)
            }
        case SET_USERS :
            return {...state, items: [...state.items, ...action.payload.users]}

        default:
            return state
    }
}

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const unFollowAC = (id: number) => {
    return {
        type: UN_FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}