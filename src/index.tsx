import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export const renderTree = () => {
    ReactDOM.render(
        <App
            store={store}
             message={store._state.profilePage.message}
        />,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree);

