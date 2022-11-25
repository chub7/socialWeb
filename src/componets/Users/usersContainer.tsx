import {connect} from "react-redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleFetching, toggleFollowingProgress,
    unFollow,
    UsersType
} from "./usersReducer";
import React from "react";

import {Users} from "./users";
import s from "./user.module.css";
import {getUsers} from "../../api";


export class UsersAPIComponent extends React.Component<usersContainerConnectCommonType> {

    componentDidMount() {
        this.props.toggleFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUserCount(50)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleFetching(true)
        getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.items)
            })
    }

    render() {

        return (<>
            <div className={this.props.isFetching ? s.loader : ``}></div>
            <Users
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPageUsers={this.props.usersPageUsers}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                totalCount={this.props.totalCount}
                setCurrentPage={this.props.setCurrentPage}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingProgress={this.props.followingProgress}
            />
        </>)
    }
}


type mapStateToPropsType = {
    usersPageUsers: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage :number)=>void
    setTotalUserCount : (TotalUserCount:number)=>void
    toggleFetching : (isFetching:boolean)=>void
    toggleFollowingProgress:(follow:boolean, id:number)=>void
}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        usersPageUsers: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export type usersContainerConnectCommonType = mapStateToPropsType & mapDispatchToPropsType

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleFetching,
    toggleFollowingProgress
})(UsersAPIComponent);
