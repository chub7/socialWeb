import React from 'react';
import {v1} from "uuid";
import {ActionTypes, dialogsPageType} from "./state";


const CHANGHE_NEW_MESSAGE_BODY = 'CHANGHE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let dialogsPageIntialState = {
    dialogsData: [
        {id: v1(), name: "Dima"},
        {id: v1(), name: "July"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Katya"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Maks"}
    ],
    messageData: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Nice to see you"},
        {id: v1(), message: "Salam"},
        {id: v1(), message: "Zdarova"},
        {id: v1(), message: "rush B"},
        {id: v1(), message: "nigga"}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state:dialogsPageType = dialogsPageIntialState, action:ActionTypes) => {
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