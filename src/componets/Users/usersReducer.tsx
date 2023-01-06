import {usersAPI} from "../../api";
import {AppThunkType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import {updateObjectInArray} from "../../utils/objects-helper";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type usersInitialStateTypeNew = {
    items: Array<UsersType>
    totalCount: number,
    error: string
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
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

let usersInitialState = {
    items: [],
    totalCount: 0,
    error: '',
    pageSize: 4,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

export const usersReducer = (state: usersInitialStateTypeNew = usersInitialState, action: UsersReducerActionsType): usersInitialStateTypeNew => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                items: updateObjectInArray(state.items, action.payload.userId, 'id', {followed:true})
                //items: state.items.map(e => e.id === action.payload.userId ? {...e, followed: true} : e)
            }
        case UN_FOLLOW :
            return {
                ...state,
                items: updateObjectInArray(state.items, action.payload.userId, 'id', {followed:false})
                //items: state.items.map(e => e.id === action.payload.userId ? {...e, followed: false} : e)
            }
        case SET_USERS :
            return {...state, items: action.payload.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalCount: action.payload.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingProgress: action.payload.isFetching
                    ? [...state.followingProgress, action.payload.userId]
                    : [...state.followingProgress.filter(e => e !== action.payload.userId)]
            }

        default:
            return state
    }
}

export type UsersReducerActionsType = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUserCount> |
    ReturnType<typeof toggleFetching> |
    ReturnType<typeof toggleFollowingProgress>

// actions creators
export const followAC = (id: number) => {
    console.log(id)
    return {
        type: FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const unFollowAC = (id: number) => {
    console.log(id)
    return {
        type: UN_FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalUserCount: totalUserCount
        }
    } as const
}
export const toggleFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching: isFetching
        }
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching,
            userId
        }
    } as const
}

// thunks
export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunkType =>
    async (dispatch) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUserCount(50))
        dispatch(setCurrentPage(currentPage))
    }
export type ResponseType<T> = {
    data: T;
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
}
export const followUnfollowFlow = async (id: number, dispatch: Dispatch,
                                         apiMethod: (userId: number) => Promise<AxiosResponse<ResponseType<null>>>,
                                         action: (id: number) => UsersReducerActionsType) => {
    dispatch(toggleFollowingProgress(true, id))
    let response = await apiMethod(id)
    console.log(response)
    if (response.data.resultCode === 0) {
        dispatch(action(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}

export const unFollow = (id: number): AppThunkType =>
    async (dispatch) => {
        followUnfollowFlow(id, dispatch, usersAPI.unFollow.bind(usersAPI), unFollowAC)
        //     dispatch(toggleFollowingProgress(true, id))
        //     let response = await usersAPI.unFollow(id)
        //     if (response.data.resultCode === 0) {
        //         dispatch(unFollowAC(id))
        //     }
        //     dispatch(toggleFollowingProgress(false, id))
    }

export const follow = (id: number): AppThunkType =>
    async (dispatch) => {
        followUnfollowFlow(id, dispatch, usersAPI.follow.bind(usersAPI), followAC)
        //     dispatch(toggleFollowingProgress(true, id))
        //     let response = await usersAPI.follow(id)
        //     if (response.data.resultCode === 0) {
        //         dispatch(followAC(id))
        //     }
        //     dispatch(toggleFollowingProgress(false, id))

    }
