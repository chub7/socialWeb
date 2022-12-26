import {ReduxRootStoreType} from "./redux-store";
import {createSelector} from "reselect";




const getUsersSelector = (state : ReduxRootStoreType) => {
    return state.usersPage.items
}
export const getUsers =  createSelector(getUsersSelector,(users)=>{
    return users
})
export const getPageSize = (state : ReduxRootStoreType) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state : ReduxRootStoreType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state : ReduxRootStoreType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state : ReduxRootStoreType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state : ReduxRootStoreType) => {
    return state.usersPage.followingProgress
}