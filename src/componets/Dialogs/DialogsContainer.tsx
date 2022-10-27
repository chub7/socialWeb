import React from 'react';
import {changeNewMessageBodyAc, sendNewMessageAc} from "../../redux/dialogsReducer";
import {RootStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store: RootStoreType
}

export const DialogsContainer = (props: DialogsType) => {
    let dialogsPageData = props.store.getState().dialogsPage

    const onChangetextAreaHadnler = (newText: string) => {
        props.store.dispatch(changeNewMessageBodyAc(newText))
    }
    const onButtonClickHandler = () => {
        props.store.dispatch(sendNewMessageAc(props.store.getState().dialogsPage.newMessageBody))
    }

    return (<Dialogs dialogsPageData={dialogsPageData}
                     onChangetextAreaHadnler={onChangetextAreaHadnler}
                     onButtonClickHandler={onButtonClickHandler}
        />

    );
};
