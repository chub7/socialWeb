import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageInitialStateType} from "../../redux/dialogsReducer";
import {AddMessage} from "./AddMessageForm";



type DialogsType = {
    dialogsPageData: dialogsPageInitialStateType
    onChangetextAreaHadnler: (newText: string) => void
    onButtonClickHandler: (newMessageBody: string) => void
    isAuth: boolean

}

export const Dialogs = (props: DialogsType) => {

    let messagesElemets = props.dialogsPageData.messageData.map(e => <Message key={e.id} message={e.message}
                                                                              id={e.id}/>)
    let dialogsElemets = props.dialogsPageData.dialogsData.map(e => <DialogItem key={e.id} name={e.name} id={e.id}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsitems}>
                    {dialogsElemets}
                </div>
                <div className={s.messages}>
                    {messagesElemets}
                </div>
                <AddMessage onSumbit={props.onButtonClickHandler}/>
            </div>

        </div>
    );
};


