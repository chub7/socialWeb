import React from 'react';
import s from "./ProfileInfo.module.css";
import {profileType} from "../../../redux/profileReducer";

type ProfileInfoType = {
    profile: profileType
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if(!props.profile) {
        return <div className={props.profile ? s.loader : ``}></div>
    } else

    return (
        <div>
            <img src="https://pagosaviews.com/wp-content/uploads/2022/02/hero-balloon-adventures-t.jpg"/>
            <div className={s.descriptionBlock}>Ava + des</div>
            <img src={`${props.profile.photos.large}`}/>
        </div>
    );
};
