import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


//export const renderTree = () => {
ReactDOM.render(
    <Provider store={store}>
        <App
            //store={store}
            //message={store.getState().profilePage.message}
        />
    </Provider>,
    document.getElementById('root')
);
//}

//renderTree()

//store.subscribe(()=>renderTree);

