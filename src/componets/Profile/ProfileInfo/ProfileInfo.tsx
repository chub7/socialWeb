import React from 'react'
import s from "./ProfileInfo.module.css";
import {profileType} from "../../../redux/profileReducer";
import {PreLoader} from "../PreLoader";
import {ProfileStatus} from "../ProfileStatus";


type ProfileInfoType = {
    profile: profileType | null
    status : string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <PreLoader/>
    }

    return (
        <div>
            <img alt={`#`} src="https://pagosaviews.com/wp-content/uploads/2022/02/hero-balloon-adventures-t.jpg"/>
            <div className={s.descriptionBlock}>Ava + des</div>
            <img alt={`#`} src={`${props.profile.photos.large}`}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}
            />
        </div>
    );
};
