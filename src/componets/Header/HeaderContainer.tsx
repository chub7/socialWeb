import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {dataType, logOut} from "../../redux/auth-reducer";


export class HeaderContainerAPI extends React.Component<OwnPropsType> {


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
    logOut: () => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = ( state: ReduxRootStoreType) : mapStateToPropsType => {
return{
    auth: state.auth
}
}

export const HeaderContainer = connect(mapStateToProps, {logOut})(HeaderContainerAPI)