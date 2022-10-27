import React from 'react';
import './App.css';
import {Header} from "./componets/Header/Header";
import {NavBar} from "./componets/NavBar/Nav";
import {Profile} from "./componets/Profile/Profile";
import {Dialogs} from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./componets/News/News";
import {RootStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";


type AppType = {
    store: RootStoreType
    message: string

}

const App: React.FC<AppType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">

                    <Route exact path={`/dialogs`} render={() =>
                        <DialogsContainer store={props.store} />
                    }/>

                    <Route exact path={`/profile`} render={() =>
                       <Profile store={props.store}/>
                    }/>

                    <Route exact path={`/news`} component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

