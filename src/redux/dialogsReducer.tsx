import {v1} from "uuid";

const CHANGHE_NEW_MESSAGE_BODY = 'CHANGHE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type dialogsDataType = {
    id: string
    name: string
}
export type messageDataType = {
    id: string
    message: string
}

let dialogsPageIntialState = {
    dialogsData: [
        {id: v1(), name: "Dima"},
        {id: v1(), name: "July"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Katya"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Maks"}
    ] as Array<dialogsDataType>,
    messageData: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Nice to see you"},
        {id: v1(), message: "Salam"},
        {id: v1(), message: "Zdarova"},
        {id: v1(), message: "rush B"},
        {id: v1(), message: "nigga"}
    ] as Array<messageDataType>,
    newMessageBody: "" as string
}

export type dialogsPageInitialStateType = typeof dialogsPageIntialState

export const dialogsReducer = (state: dialogsPageInitialStateType = dialogsPageIntialState, action: DialogsReducerActionsTypes): dialogsPageInitialStateType => {
    switch (action.type) {
        case CHANGHE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.newText};
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: v1(), message: state.newMessageBody}]
            };
        default:
            return state
    }

}

export type DialogsReducerActionsTypes = ReturnType<typeof changeNewMessageBodyAc> | ReturnType<typeof sendNewMessageAc>

export const changeNewMessageBodyAc = (newText: string) => {
    return {
        type: CHANGHE_NEW_MESSAGE_BODY,
        newText: newText
    } as const
}
export const sendNewMessageAc = (messageText: string) => {
    return {
        type: SEND_MESSAGE,
        newText: messageText
    } as const
}