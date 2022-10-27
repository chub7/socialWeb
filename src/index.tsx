import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";


export const renderTree = () => {
    ReactDOM.render(
        <App
            store={store}
            message={store.getState().profilePage.message}
        />,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree);

