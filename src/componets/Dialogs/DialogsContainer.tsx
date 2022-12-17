import React from 'react';
import {dialogsPageInitialStateType, sendNewMessageAc} from "../../redux/dialogsReducer";
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
        onButtonClickHandler: (newMessageBody: string) => {
            dispatch(sendNewMessageAc(newMessageBody))
        }

    }
}

export const DialogsContainer =
    compose<React.ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        WithAuthRedirect
    )(Dialogs)