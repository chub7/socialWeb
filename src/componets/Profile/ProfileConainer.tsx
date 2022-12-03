import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {getUserProfile, ProfileStatusType, profileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: profileType | null
    isAuth: boolean
    //profileStatus: ProfileStatusType
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

        return (<div>
            <Profile profile={this.props.profile} //profileStatus={this.props.profileStatus}
            />
        </div>)
    }

}



const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
        //profileStatus: state.profilePage.profileStatus,
    }
}


//let withUrlDataContainerComponent = withRouter(ProfileContainerAPI)
//export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);
//export const ProfileContainer = WithAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent));
//export const ProfileContainer = WithAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainerAPI)));

export const ProfileContainer =  compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    //WithAuthRedirect
)(ProfileContainerAPI)
