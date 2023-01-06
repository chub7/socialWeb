import {v1} from "uuid";
import {AppThunkType} from "./redux-store";
import {profileAPI, usersAPI} from "../api";

const ADD_POST = 'ADD-POST'
const DEL_POST = 'DEL_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileReducerActionTypes = ReturnType<typeof addPostAc>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAc>


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
        case DEL_POST:
            return {
                ...state,
                message: '',
                postsData:
                    state.postsData.filter(e => e.id != action.id)
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPostAc = (postText: string) => ({type: ADD_POST, postText} as const)
export const deletePostAc = (id: string) => ({type: DEL_POST, id} as const)
export const setUserProfile = (profile: profileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

// thunk
export const getUserProfile = (userId: string): AppThunkType => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
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