import {v1} from "uuid";
import {AppThunkType} from "./redux-store";
import {profileAPI, usersAPI} from "../api";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


export type postsDataType = {
    id: string
    message: string
    likesCount: number
}
type profilePageInitialStateType = {
    message:string,
    postsData :Array<postsDataType>
    profile: profileType | null
    status: string
}
let profilePageInitialState = {
    message: ``,
    postsData: [
        {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
        {id: v1(), message: "It's my first post", likesCount: 23},
    ] as Array<postsDataType>,
    profile: null,
    status: ``,

};

//export type profilePageInitialStateType = typeof profilePageInitialState

export const profileReducer = (state: profilePageInitialStateType = profilePageInitialState, action: ProfileReducerActionTypes): profilePageInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                message: '',
                postsData:
                    [...state.postsData, {id: v1(), message: action.postText, likesCount: 0}]
            }
        case CHANGE_NEW_TEXT:
            return {...state, message: action.newText};
            case SET_USER_PROFILE:
            return {...state, profile: action.payload.profile};
            case SET_STATUS:
            return {...state, status: action.status }
        default:
            return state;
    }
}

export type ProfileReducerActionTypes = ReturnType<typeof addPostAc>
    | ReturnType<typeof changeNewTextAc>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export const addPostAc = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const changeNewTextAc = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile: profileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
// thunk
export const getUserProfile = (userId: string): AppThunkType => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (userId: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode  === 0 ) {
                    dispatch(setStatus(status))
                }
            })
    }
}


export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}
type photosType = {
    small: string | null
    large: string | null
}
type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}