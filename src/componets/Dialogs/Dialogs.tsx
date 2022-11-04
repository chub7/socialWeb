import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { dialogsPageType} from "../../redux/state";


type DialogsType = {
    dialogsPageData: dialogsPageType
    onChangetextAreaHadnler:(newText:string)=>void
    onButtonClickHandler:(newMessageBody: string)=>void

}

export const Dialogs = (props: DialogsType) => {

    let messagesElemets = props.dialogsPageData.messageData.map(e => <Message key={e.id} message={e.message} id={e.id}/>)
    let dialogsElemets = props.dialogsPageData.dialogsData.map(e => <DialogItem key={e.id} name={e.name} id={e.id}/>)

    const onChangetextAreaHadnler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.onChangetextAreaHadnler(newText)
    }
    const onButtonClickHandler = () => {
        props.onButtonClickHandler(props.dialogsPageData.newMessageBody)
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
                <textarea value={props.dialogsPageData.newMessageBody} onChange={onChangetextAreaHadnler} ></textarea>
                <button onClick={onButtonClickHandler}>Add post</button>
            </div>

        </div>
    );
};


