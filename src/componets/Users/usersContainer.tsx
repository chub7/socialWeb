import {connect} from "react-redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    unFollow,
    UsersType
} from "./usersReducer";
import React from "react";
import {Users} from "./users";
import s from "./user.module.css";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selector";



export class UsersAPIComponent extends React.Component<usersContainerConnectCommonType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
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
    setCurrentPage: (currentPage :number)=>void
    getUsersThunkCreator:(currentPage:number,pageSize:number)=>void
}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        usersPageUsers: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

export type usersContainerConnectCommonType = mapStateToPropsType & mapDispatchToPropsType

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    getUsersThunkCreator
})(UsersAPIComponent);
