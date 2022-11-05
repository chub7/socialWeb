import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const CHANGHE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export type postsDataType = {
    id: string
    message: string
    likesCount: number
}

let profilePageIntialState = {
    message: `` as string,
    postsData: [
        {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
        {id: v1(), message: "It's my first post", likesCount: 23},
    ] as Array<postsDataType>,
};

export type profilePageInitialStateType = typeof profilePageIntialState

export const profileReducer = (state: profilePageInitialStateType = profilePageIntialState, action: ActionTypes): profilePageInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                message: '',
                postsData:
                    [...state.postsData, {id: v1(), message: action.postText, likesCount: 0}]
            }
        case CHANGHE_NEW_TEXT:
            return {...state, message: action.newText};
        default:
            return state;
    }
}

type ActionTypes = ReturnType<typeof addPostAc> | ReturnType<typeof changeNewTextAc>

export const addPostAc = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const changeNewTextAc = (newText: string) => {
    return {
        type: CHANGHE_NEW_TEXT,
        newText: newText
    } as const
}