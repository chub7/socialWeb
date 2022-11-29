import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {getAuthUserData, dataType} from "../../redux/auth-reducer";


export class HeaderContainerAPI extends React.Component<OwnPropsType> {

    componentDidMount() {
        this.props.authThunk()
    }

    render() {
        return (
            <Header auth={this.props.auth}/>
        )
    }
}

type mapStateToPropsType = {
    auth: dataType
}
type mapDispatchToPropsType = {
    authThunk: () => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = ( state: ReduxRootStoreType) : mapStateToPropsType => {
return{
    auth: state.auth
}
}

export const HeaderContainer = connect(mapStateToProps, {authThunk: getAuthUserData})(HeaderContainerAPI)