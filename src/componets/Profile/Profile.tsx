import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { profileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: profileType | null
    status : string
    updateStatus: (status: string) => void
}

export const Profile = (props : ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
}