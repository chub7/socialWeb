import {v1} from "uuid";
const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'

export type usersInitialStateType =  typeof usersInitialState;

type locationType ={
    city:string,
    country:string
}

export type usersType ={
    id:string,
    photoUrl:string,
    followStatus: boolean,
    fullName: string,
    status: string,
    location: locationType
}

let usersInitialState = {
   users: [
       {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: true, fullName: `Dmitry`, status: `free`, location: {city: `Minsk`, country: `Bel`}},
       {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: true, fullName: `Julia`, status: `busy`, location: {city: `Hrodno`, country: `Bel`}},
       {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: false, fullName: `Artem`, status: `work`, location: {city: `Moskwa`, country: `Rus`}},
       {id:v1(), photoUrl: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",followStatus: false, fullName: `Maks`, status: `student`, location: {city: `Kiev`, country: `Ukr`}},
] as Array<usersType>
}

export const usersReducer =(state: usersInitialStateType = usersInitialState, action: ActionType)=>{
    switch (action.type){
        case FOLLOW :
            return {...state, users: state.users.map(e=>e.id === action.payload.userId?{...e, followStatus: true} : e) }
        case UN_FOLLOW :
            return {...state, users: state.users.map(e=>e.id === action.payload.userId?{...e, followStatus: false} : e) }
        case SET_USERS :
            return {...state, users: [...state.users, ...action.payload.users]}

        default: return state
    }
}

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (id:string)=>{
    return {
        type: FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const unFollowAC = (id:string)=>{
    return {
        type: UN_FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const setUsersAC = (users:Array<usersType>)=>{
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}