import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileStatusType, profileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: profileType | null
    //profileStatus : ProfileStatusType
}

export const Profile = (props : ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} //profileStatus={props.profileStatus}
            />
            <MyPostsContainer />
        </div>
    )
}