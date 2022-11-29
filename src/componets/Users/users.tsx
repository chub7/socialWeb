import React from 'react';
import s from "./user.module.css";
import userPhoto from "../../images/sbcf-default-avatar.png"
import {UsersType} from "./usersReducer";
import {NavLink} from "react-router-dom";

type usersType = {
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPageUsers: Array<UsersType>
    unFollow: (id: number) => void
    follow: (id: number) => void
    setCurrentPage: (id: number) => void
    totalCount: number
    followingProgress: Array<number>
}

export const Users = (props: usersType) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages: Array<number> = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((el, i) => <span key={i} onClick={() => {

                        props.onPageChanged(el)

                    }} className={props.currentPage === el ? s.selectedPage : ``}>{el}</span>
                )}
            </div>
            {props.usersPageUsers.map(e => <div key={e.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${e.id}`}>
                    <img alt={'#'} className={s.userPhoto} src={e.photos.small === null ? userPhoto : e.photos.small}/>
                    </NavLink>
                </div>
                <div>
                    {e.followed
                        ? <button disabled={props.followingProgress.some(id => id ===e.id)}
                                  onClick={() => props.unFollow(e.id)}>UnFollow</button>
                        : <button disabled={props.followingProgress.some(id => id ===e.id)}
                                  onClick={() => props.follow(e.id)}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{e.name}</div>
                    <div>{e.status}</div>
                </span>
                <span>
                    <div>{'e.location.country'}</div>
                    <div>{'e.location.city'}</div>
                </span>
            </span>
            </div>)}</div>
        )
    }
