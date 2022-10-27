import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, profilePageType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootStoreType} from "../../redux/redux-store";

type profilePageTypeSpecial = {
    store: RootStoreType
}


export const Profile = (props: profilePageTypeSpecial) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />

        </div>
    )
}