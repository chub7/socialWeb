import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, profilePageType} from "../../redux/state";

type profilePageTypeSpecial = profilePageType & {
    dispatch: (action: ActionTypes) => void
}


export const Profile = (props: profilePageTypeSpecial) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     message={props.message}
                     dispatch={props.dispatch}
            />

        </div>
    )
}