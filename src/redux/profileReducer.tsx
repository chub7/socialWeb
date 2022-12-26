import {v1} from "uuid";
import {AppThunkType} from "./redux-store";
import {profileAPI, usersAPI} from "../api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileReducerActionTypes = ReturnType<typeof addPostAc>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


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


export const profileReducer = (state: profilePageInitialStateType = profilePageInitialState, action: ProfileReducerActionTypes): profilePageInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                message: '',
                postsData:
                    [...state.postsData, {id: v1(), message: action.postText, likesCount: 0}]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
                        return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPostAc = (postText: string) => ({ type: ADD_POST, postText} as const)
export const setUserProfile = (profile: profileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

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