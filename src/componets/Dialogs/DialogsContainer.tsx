import React from 'react';
import {changeNewMessageBodyAc, dialogsPageInitialStateType, sendNewMessageAc} from "../../redux/dialogsReducer";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import { Dispatch } from 'redux';


// export const DialogsContainer = (props: DialogsType) => {
//     let dialogsPageData = props.store.getState().dialogsPage
//
//     const onChangetextAreaHadnler = (newText: string) => {
//         props.store.dispatch(changeNewMessageBodyAc(newText))
//     }
//     const onButtonClickHandler = () => {
//         props.store.dispatch(sendNewMessageAc(props.store.getState().dialogsPage.newMessageBody))
//     }
//
//     return (<Dialogs dialogsPageData={dialogsPageData}
//                      onChangetextAreaHadnler={onChangetextAreaHadnler}
//                      onButtonClickHandler={onButtonClickHandler}
//         />
//
//     );
// };

type mapStateToPropsType = {
    dialogsPageData:dialogsPageInitialStateType
}

type mapDispatchToPropsType = {
    onChangetextAreaHadnler:(newText:string)=>void,
    onButtonClickHandler:(newMessageBody: string)=>void
}

const mapStateToProps =(state:ReduxRootStoreType):mapStateToPropsType=>{
    return {
        dialogsPageData: state.dialogsPage
    }
}


const mapDispatchToProps =(dispatch: Dispatch):mapDispatchToPropsType=>{
    return{
        onChangetextAreaHadnler: (newText:string)=> {
            dispatch(changeNewMessageBodyAc(newText))
        },
        onButtonClickHandler:(newMessageBody: string)=>{
            dispatch(sendNewMessageAc(newMessageBody))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);