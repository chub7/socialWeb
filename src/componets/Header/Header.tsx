import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {dataType} from "../../redux/auth-reducer";

type HeaderType = {
    auth: dataType
    logOut:() => void
}

export const Header = (props:HeaderType) => {
    return (
        <header className={s.header}>
            <img src="https://www.clipartmax.com/png/middle/257-2570094_transparent-background-vodafone-logo.png"
                 alt=""/>
            <div className={s.loginBlock}>
                {props.auth.isAuth
                    ?  <div>{props.auth.login} --- <button onClick={props.logOut}>Log Out</button></div>
                    :
                <NavLink to={`/login`}>
                    Login
                </NavLink>}
            </div>
        </header>
    )
}