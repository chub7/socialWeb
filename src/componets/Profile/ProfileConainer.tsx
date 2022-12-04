import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {getStatus, getUserProfile, profileType, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=`26505`
        }
        this.props.getUserProfile(userId)
     this.props.getStatus(userId)

    }

    render() {

        return (<div>
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
            />
        </div>)
    }

}
type mapStateToPropsType = {
    profile: profileType | null
    isAuth: boolean
    status: string
}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status

    }
}




export const ProfileContainer =  compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //WithAuthRedirect
)(ProfileContainerAPI)
