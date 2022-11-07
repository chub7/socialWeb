import React from 'react';
import s from "./user.module.css";
import axios from 'axios';
import usertPhoro from "../../images/sbcf-default-avatar.png"
import {CommonType} from "./usersContainer";



export class Users extends React.Component<CommonType> {

    constructor(props: CommonType | Readonly<CommonType>) {
        super(props);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }


    render() {
        return (
            <div>{this.props.usersPageUsers.map(e => <div key={e.id}>
            <span>
                <div>
                    <img alt={'#'} className={s.userPhoto} src={e.photos.small === null ? usertPhoro : e.photos.small}/>
                </div>
                <div>
                    {e.followed
                        ? <button onClick={() => this.props.unFollow(e.id)}>UnFollow</button>
                        : <button onClick={() => this.props.follow(e.id)}>Follow</button>}
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
}
