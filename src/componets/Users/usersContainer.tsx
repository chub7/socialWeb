import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unFollowAC, UsersType} from "./usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./users";


export class UsersAPIComponent extends React.Component<CommonType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(50)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (<Users
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersPageUsers={this.props.usersPageUsers}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            totalCount={this.props.totalCount}
            setCurrentPage={this.props.setCurrentPage}
        />)
    }
}


export type mapStateToPropsType = {
    usersPageUsers: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage : number
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage :number)=>void
    setTotalUserCount : (TotalUserCount:number)=>void
}
const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        usersPageUsers: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount : state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => {

            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage :number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUserCount) => {
            dispatch((setTotalUserCountAC(totalUserCount)))
        }
    }
}

export type CommonType = mapStateToPropsType & mapDispatchToPropsType



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
