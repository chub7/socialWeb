import React from 'react'
import s from "./ProfileInfo.module.css";
import {ProfileStatusType, profileType} from "../../../redux/profileReducer";


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })

    }

    render() {

        return <>
            {!this.state.editMode
                ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{`Status`}</span>
                </div>
                :
                <div>
                    <input value={`Status`} onDoubleClick={this.activateEditMode}></input>
                </div>
            }

        </>


    }
}

type ProfileInfoType = {
    profile: profileType | null
    //profileStatus : ProfileStatusType
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <div className={props.profile ? s.loader : ``}></div>
    }

    return (
        <div>
            <img alt={`#`} src="https://pagosaviews.com/wp-content/uploads/2022/02/hero-balloon-adventures-t.jpg"/>
            <div className={s.descriptionBlock}>Ava + des</div>
            <img alt={`#`} src={`${props.profile.photos.large}`}/>
            <ProfileStatus //status={props.profileStatus.status} editable={props.profileStatus.editable}
            />
        </div>
    );
};
