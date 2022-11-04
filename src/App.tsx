import React from 'react';
import './App.css';
import {Header} from "./componets/Header/Header";
import {NavBar} from "./componets/NavBar/Nav";
import {Profile} from "./componets/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./componets/News/News";
import {RootStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";


type AppType = {
    store: RootStoreType
    message: string

}

const App: React.FC<AppType> = (props) => {
        return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">

                    <Route exact path={`/dialogs`} render={() =>
                        <DialogsContainer  />
                    }/>

                    <Route exact path={`/profile`} render={() =>
                       <Profile />
                    }/>

                    <Route exact path={`/news`} component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

