import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


export type postsDataType = {
    id: string
    message: string
    likesCount: number
}
type profilePageInitialStateType = {
    message:string,
    postsData :Array<postsDataType>
    profile : profileType | null
}
let profilePageInitialState = {
    message: ``,
    postsData: [
        {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
        {id: v1(), message: "It's my first post", likesCount: 23},
    ] as Array<postsDataType>,
    profile: null
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
        default:
            return state;
    }
}

export type ProfileReducerActionTypes = ReturnType<typeof addPostAc> | ReturnType<typeof changeNewTextAc> | ReturnType<typeof setUserProfile>

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