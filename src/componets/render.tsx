import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import store from "../redux/state";

export const renderTree = () => {
    ReactDOM.render(
        <App
            store={store}
            message={store._state.profilePage.message}
        />,
        document.getElementById('root')
    );
}
