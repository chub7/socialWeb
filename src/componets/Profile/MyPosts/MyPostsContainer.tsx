import React from "react";
import {addPostAc, changeNewTextAc, postsDataType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ReduxRootStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    message:string,
    postsData: Array<postsDataType>
}
type mapDispatchToProps = {
    onButtonClickHandler:(message: string)=>void,
    onChangeTextAreaHandler:(newtext: string)=>void

}
const mapStateToProps = (state: ReduxRootStoreType) : mapStateToPropsType => {
    return {
        message: state.profilePage.message,
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToProps => {
    return {
        onButtonClickHandler: (message: string) => {
            dispatch(addPostAc(message))
        },
        onChangeTextAreaHandler: (newtext: string) => {
            dispatch(changeNewTextAc(newtext))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
