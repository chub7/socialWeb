import React from "react";
import {addPostAc, changeNewTextAc} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";


type profilePageTypeSpecial = {
    store: RootStoreType

}

export const MyPostsContainer = (props: profilePageTypeSpecial) => {

    let message = props.store.getState().profilePage.message
    let postsData =  props.store.getState().profilePage.postsData
    const onButtonClickHandler = () => {

        props.store.dispatch(addPostAc(message))

    }

    const onChangetextAreaHadnler = (newtext: string) => {

        props.store.dispatch(changeNewTextAc(newtext))
    }

    return (<MyPosts message={message}
                     postsData={postsData}
                     onChangetextAreaHadnler={onChangetextAreaHadnler}
                     onButtonClickHandler={onButtonClickHandler}
        />


    )
}