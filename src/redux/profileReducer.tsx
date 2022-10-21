import React from 'react';
import {v1} from "uuid";
import {ActionTypes, postsDataType, profilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const CHANGHE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export const profileReducer = (state:profilePageType, action:ActionTypes) => {
    switch (action.type){
        case ADD_POST:
            const newPost: postsDataType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.message = ``;
            return state
        case CHANGHE_NEW_TEXT:
            state.message = action.newText
            return state;
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