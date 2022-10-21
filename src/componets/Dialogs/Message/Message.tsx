import React from 'react';
import s from "./../Dialogs.module.css";
import {messageDataType} from "../../../redux/state";


export const Message = (props:messageDataType ) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


