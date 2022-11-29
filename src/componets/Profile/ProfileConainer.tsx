import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {getUserProfile, profileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: profileType | null
    isAuth:boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)

    }

    render() {
        if(!this.props.isAuth) return <Redirect to={`/login`} />
        return (<div>
            <Profile profile={this.props.profile}/>
        </div>)
    }

}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);