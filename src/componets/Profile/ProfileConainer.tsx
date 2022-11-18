import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxRootStoreType} from "../../redux/redux-store";
import axios from "axios";
import {profileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: profileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (response: profileType) => void
}
type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return (<div>
            <Profile profile={this.props.profile}/>
        </div>)
    }

}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }

}

let withUrlDataContainerComponent = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);