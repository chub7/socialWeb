import React from 'react';
import {usersType} from "./usersReducer";
import s from "./user.module.css";

type UsersType = {
    usersPageUsers: Array<usersType>,
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: Array<usersType>) => void
}

export const Users = (props: UsersType) => {

    return (
        <div>{props.usersPageUsers.map(e => <div key={e.id}>
            <span>
                <div>
                    <img alt={'#'} className={s.userPhoto} src={e.photoUrl}/>
                </div>
                <div>
                    {e.followStatus
                        ?<button onClick={()=>props.unFollow(e.id)}>UnFollow</button>
                        :<button onClick={()=>props.follow(e.id)}>Follow</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{e.fullName}</div>
                    <div>{e.status}</div>
                </span>
                <span>
                    <div>{e.location.country}</div>
                    <div>{e.location.city}</div>
                </span>
            </span>
        </div>)}</div>
    );
};

