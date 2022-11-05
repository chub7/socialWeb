import React from 'react';
import './App.css';
import {Header} from "./componets/Header/Header";
import {NavBar} from "./componets/NavBar/Nav";
import {Profile} from "./componets/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";
import {UsersContainer} from "./componets/Users/usersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">

                    <Route exact path={`/dialogs`} render={() =>
                        <DialogsContainer/>
                    }/>

                    <Route exact path={`/profile`} render={() =>
                        <Profile/>
                    }/>
                    <Route exact path={`/users`} render={() =>
                        <UsersContainer/>
                    }/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

