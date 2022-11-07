import React from 'react';
import {UsersType} from "./usersReducer";
import s from "./user.module.css";
import axios from 'axios';
import usertPhoro from "../../images/sbcf-default-avatar.png"

export type componentUsersType = {
    usersPageUsers: Array<UsersType>,
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export const Users = (props: componentUsersType) => {
        if(props.usersPageUsers.length  === 0 ) {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                .then(response => {
                props.setUsers(response.data.items)
            } )
        }

    return (
        <div>{props.usersPageUsers.map(e => <div key={e.id}>
            <span>
                <div>
                    <img alt={'#'} className={s.userPhoto} src={e.photos.small===null? usertPhoro : e.photos.small}/>
                </div>
                <div>
                    {e.followed
                        ?<button onClick={()=>props.unFollow(e.id)}>UnFollow</button>
                        :<button onClick={()=>props.follow(e.id)}>Follow</button> }
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
    );
};

