import React from 'react';
import {changeNewMessageBodyAc, dialogsPageInitialStateType, sendNewMessageAc} from "../../redux/dialogsReducer";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";



type mapStateToPropsType = {
    dialogsPageData:dialogsPageInitialStateType
    isAuth:boolean
}

type mapDispatchToPropsType = {
    onChangetextAreaHadnler:(newText:string)=>void,
    onButtonClickHandler:(newMessageBody: string)=>void
}

const mapStateToProps =(state:ReduxRootStoreType):mapStateToPropsType=>{
    return {
        dialogsPageData: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const mapDispatchToProps =(dispatch: Dispatch):mapDispatchToPropsType=>{
    return{
        onChangetextAreaHadnler: (newText: string) => {
            dispatch(changeNewMessageBodyAc(newText))
        },
        onButtonClickHandler: (newMessageBody: string) => {
            dispatch(sendNewMessageAc(newMessageBody))
        }

    }
}


//export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs));
export const DialogsContainer =
    compose<React.ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        WithAuthRedirect
    )(Dialogs)