import React from 'react';
import {connect} from "react-redux";
import {Users} from "./users";
import {Dispatch} from "redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, usersType} from "./usersReducer";


type mapStateToPropsType = {
    usersPageUsers: Array<usersType>
}
type mapDispatchToPropsType = {
    follow: (id: string)=>void
    unFollow: (id: string) => void
    setUsers: (users: Array<usersType>) => void
}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        usersPageUsers: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType=> {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unFollow: (id: string) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

