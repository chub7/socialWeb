import React, {ChangeEvent} from 'react'
import s from "./ProfileInfo.module.css";
import {profileType} from "../../../redux/profileReducer";

type PropsType = {
    status:string
    updateStatus: (status: string) => void
}
class ProfileStatus extends React.Component <PropsType>{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)

    }

    onStatusChange =(e:ChangeEvent<HTMLInputElement>)=> {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {


        return <>
            {!this.state.editMode
                ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || `Empty status`}</span>
                </div>
                :
                <div>
                    <input value={this.state.status} autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode}   onDoubleClick={this.activateEditMode}/>
                </div>
            }

        </>


    }
}

type ProfileInfoType = {
    profile: profileType | null
    status : string
    updateStatus: (status: string) => void
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
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}
            />
        </div>
    );
};
