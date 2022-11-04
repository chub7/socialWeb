import React from 'react';
import {v1} from "uuid";
import {ActionTypes} from "./state";

const ADD_POST = 'ADD-POST'
const CHANGHE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export type postsDataType = {
    id: string
    message: string
    likesCount: number
}

let profilePageIntialState  = {
        message: `` as string,
        postsData: [
            {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
            {id: v1(), message: "It's my first post", likesCount: 23},
        ] as Array<postsDataType>,
    };

export type profilePageInitialStateType = typeof profilePageIntialState

export const profileReducer = (state : profilePageInitialStateType = profilePageIntialState , action: ActionTypes) : profilePageInitialStateType => {
    switch (action.type){
        case ADD_POST:
            const newPost: postsDataType = {
                id: v1(),
                message: action.postText,
                likesCount: 0 
            }
            state.message = ``;

            return {...state, postsData : [...state.postsData,newPost]}
        case CHANGHE_NEW_TEXT:
            state.message = action.newText
            return {...state,message:action.newText};
        default:
            return state;
    }
}

export const addPostAc = (postText:string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const changeNewTextAc = (newText:string) => {
    return {
        type: CHANGHE_NEW_TEXT,
        newText: newText
    } as const
}