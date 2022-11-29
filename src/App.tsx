import React from 'react';
import './App.css';
import {NavBar} from "./componets/NavBar/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";
import {UsersContainer} from "./componets/Users/usersContainer";
import {ProfileContainer} from "./componets/Profile/ProfileConainer";
import {HeaderContainer} from "./componets/Header/HeaderContainer";
import {Login} from "./componets/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;

