import React from 'react';
import s from "./user.module.css";
import userPhoto from "../../images/sbcf-default-avatar.png"
import {UsersType} from "./usersReducer";
import {NavLink} from "react-router-dom";

import {Paginator} from "./paginator";

type UserType = {
    user: UsersType
    unFollow: (id: number) => void
    follow: (id: number) => void
    followingProgress: Array<number>
}


export const User : React.FC<UserType> = ({user,unFollow,follow,followingProgress}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                    <img alt={'#'} className={s.userPhoto} src={user.photos.small === null ? userPhoto : user.photos.small}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingProgress.some(id => id ===user.id)}
                                  onClick={() => unFollow(user.id)}>UnFollow</button>
                        : <button disabled={followingProgress.some(id => id ===user.id)}
                                  onClick={() => follow(user.id)}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'e.location.country'}</div>
                    <div>{'e.location.city'}</div>
                </span>
            </span>
            </div>
        )
    }
