import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {getAuthUserData, dataType, logOut} from "../../redux/auth-reducer";


export class HeaderContainerAPI extends React.Component<OwnPropsType> {

    componentDidMount() {
        this.props.authThunk()
    }

    render() {
        return (
            <Header auth={this.props.auth} logOut={this.props.logOut}/>
        )
    }
}

type mapStateToPropsType = {
    auth: dataType
}
type mapDispatchToPropsType = {
    authThunk: () => void
    logOut:() => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = ( state: ReduxRootStoreType) : mapStateToPropsType => {
return{
    auth: state.auth
}
}

export const HeaderContainer = connect(mapStateToProps, {authThunk: getAuthUserData, logOut})(HeaderContainerAPI)