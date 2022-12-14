import {v1} from "uuid";
import {addPostAc} from "./profileReducer";
import { sendNewMessageAc} from "./dialogsReducer";

// bellow перенесено в profileReducer
type postsDataType = {
    id: string
    message: string
    likesCount: number
}
type profilePageType = {
    postsData: Array<postsDataType>
    message: string
}
// above перенесено в profileReducer

// bellow перенесено в dialogsReducer
type dialogsDataType = {
    id: string
    name: string
}
type messageDataType = {
    id: string
    message: string
}
type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
    newMessageBody: string

}
// above перенесено в dialogsReducer

type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType

    }
type StoreType = {
    _state: stateType
    _onChange: () => void
    subscribe: (callvack: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionTypes) => void

}
type ActionTypes = ReturnType<typeof addPostAc>
    | ReturnType<typeof sendNewMessageAc>


const store: StoreType = {
    _state: {
        profilePage: {
            message: ``,
            postsData: [
                {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
                {id: v1(), message: "It's my first post", likesCount: 23},
            ],
        },
        dialogsPage: {
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


    },
    _onChange() {
        console.log(`state changed`)
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        //this._state.profilePage = profileReducer(this._state.profilePage,action)
       // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        //this._state.sidebar = sideBarReducer(this._state.profilePage,action)
        this._onChange()

    }
}

export default store
