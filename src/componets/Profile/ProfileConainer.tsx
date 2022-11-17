import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxRootStoreType} from "../../redux/redux-store";
import axios from "axios";
import {profileType, setUserProfile} from "../../redux/profileReducer";

export class ProfileContainerAPI extends React.Component<ProfileContainerCommonType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {

        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }

}

type mapStateToPropsType = {
    profile: profileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (response: profileType) => void
}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }

}
type ProfileContainerCommonType = mapStateToPropsType & mapDispatchToPropsType

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerAPI);