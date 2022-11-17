import {connect} from "react-redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleFetching,
    unFollow,
    UsersType
} from "./usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./users";
import s from "./user.module.css";


export class UsersAPIComponent extends React.Component<CommonType> {

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(50)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
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
            />
        </>)
    }
}


export type mapStateToPropsType = {
    usersPageUsers: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage :number)=>void
    setTotalUserCount : (TotalUserCount:number)=>void
    toggleFetching : (isFetching:boolean)=>void
}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        usersPageUsers: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (id: number) => {
//             dispatch(follow(id))
//         },
//         unFollow: (id: number) => {
//             dispatch(unFollow(id))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage :number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUserCount: (totalUserCount) => {
//             dispatch(setTotalUserCount(totalUserCount))
//         },
//         toggleFetching: (isFetching: boolean) => {
//             dispatch(toggleFetching(isFetching))
//         }
//     }
// }

export type CommonType = mapStateToPropsType & mapDispatchToPropsType

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleFetching
})(UsersAPIComponent);
