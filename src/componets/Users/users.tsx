import React from 'react';
import s from "./user.module.css";
import axios from 'axios';
import userPhoto from "../../images/sbcf-default-avatar.png"
import {CommonType} from "./usersContainer";


export class Users extends React.Component<CommonType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(50)
            })
    }

    onPageChanged = (pageNumber : number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages: Array<number> = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map((el,i) => <span key={i} onClick={()=>{this.onPageChanged(el)}} className={this.props.currentPage===el ? s.selectedPage : ``}>{el}</span>
                    )}
                </div>
                {this.props.usersPageUsers.map(e => <div key={e.id}>
            <span>
                <div>
                    <img alt={'#'} className={s.userPhoto} src={e.photos.small === null ? userPhoto : e.photos.small}/>
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
