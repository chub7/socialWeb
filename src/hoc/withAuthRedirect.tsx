import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxRootStoreType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth:boolean
}
const mapStateToProps = (state:ReduxRootStoreType) : MapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth
    }
 }

export function WithAuthRedirect <T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props:MapStateToPropsType)=> {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={`/login`} />
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};

