import React from 'react';
import './App.css';
import {NavBar} from "./componets/NavBar/Nav";
import { Route,withRouter} from "react-router-dom";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";
import {UsersContainer} from "./componets/Users/usersContainer";
import {ProfileContainer} from "./componets/Profile/ProfileConainer";
import {HeaderContainer} from "./componets/Header/HeaderContainer";
import {Login} from "./componets/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {ReduxRootStoreType} from "./redux/redux-store";
import {PreLoader} from "./componets/Profile/PreLoader";


class AppClass extends React.Component <OwnPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {

            return <PreLoader/>
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">

                        <Route exact path={`/dialogs`} render={() =>
                            <DialogsContainer/>
                        }/>

                        <Route exact path={`/profile/:userId?`} render={() =>
                            <ProfileContainer/>
                        }/>
                        <Route exact path={`/users`} render={() =>
                            <UsersContainer/>
                        }/>
                        <Route exact path={`/login`} render={() =>
                            <Login/>
                        }/>
                    </div>
                </div>
        );
    }
}
const mapStateToProps = (state:ReduxRootStoreType) : MapStateToPropsType=>{
    return {
    initialized: state.app.initialized
}
}
type OwnPropsType = MapStateToPropsType & mapDispatchToPropsType
type MapStateToPropsType ={
    initialized : boolean
}

type mapDispatchToPropsType = {
    initializeApp: () => void
}

export const App = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
    )
    (AppClass)

// export const App = compose<React.ComponentType>(
//     connect(null, {getAuthUserData}),
//     withRouter
//     )
//     (AppClass)
