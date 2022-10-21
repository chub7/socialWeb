import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes,  dialogsPageType} from "../../redux/state";
import {changeNewMessageBodyAc, sendNewMessageAc} from "../../redux/dialogsReducer";

type DialogsType = dialogsPageType & {
    dispatch: (action: ActionTypes) => void
}

export const Dialogs = (props: DialogsType) => {
    const textareaRef = React.createRef <HTMLTextAreaElement>()

    let messagesElemets = props.messageData.map(e => <Message key={e.id} message={e.message} id={e.id}/>)
    let dialogsElemets = props.dialogsData.map(e => <DialogItem key={e.id} name={e.name} id={e.id}/>)

    const onChangetextAreaHadnler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(changeNewMessageBodyAc(newText))
    }
    const onButtonClickHandler = () => {
        props.dispatch(sendNewMessageAc(props.newMessageBody))
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsitems}>
                    {dialogsElemets}
                </div>
                <div className={s.messages}>
                    {messagesElemets}
                </div>
                <textarea value={props.newMessageBody} onChange={onChangetextAreaHadnler} ref={textareaRef}></textarea>
                <button onClick={onButtonClickHandler}>Add post</button>
            </div>

        </div>
    );
};
