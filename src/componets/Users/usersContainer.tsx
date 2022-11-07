import {connect} from "react-redux";
import {Users} from "./users";
import {Dispatch} from "redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, usersInitialStateTypeNew, UsersType} from "./usersReducer";



type mapStateToPropsType = {
    usersPageUsers: Array<UsersType>
}
type mapDispatchToPropsType = {
    follow: (id: number)=>void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const mapStateToProps = (state: ReduxRootStoreType): mapStateToPropsType => {
    return {
        usersPageUsers: state.usersPage.items
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType=> {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

