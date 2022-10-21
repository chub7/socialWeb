import React from 'react';
import {v1} from "uuid";
import {ActionTypes, dialogsPageType} from "./state";


const CHANGHE_NEW_MESSAGE_BODY = 'CHANGHE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state:dialogsPageType, action:ActionTypes) => {
    switch (action.type){
        case CHANGHE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messageData.push({id: v1(), message: body})
            return state;
        default:
            return state
    }

}

export const changeNewMessageBodyAc = (newText:string) => {
    return {
        type: CHANGHE_NEW_MESSAGE_BODY,
        newText: newText
    } as const
}
export const sendNewMessageAc = (messageText:string) => {
    return {
        type: SEND_MESSAGE,
        newText: messageText
    } as const
}