const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'



export type usersInitialStateTypeNew = {
    items: Array<UsersType>
    totalCount: number,
    error: string
    pageSize: number
    currentPage: number
    isFetching : boolean
}

export type UsersType = {
    name: string,
    id: number,
    photos: photosType
    status: string,
    followed: boolean
}

type photosType = {
    small: string,
    large: string
}

let usersInitialState = {
    items: [],
    totalCount: 0,
    error: '',
    pageSize: 4,
    currentPage: 1,
    isFetching : true
}

export const usersReducer = (state: usersInitialStateTypeNew = usersInitialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW :
            console.log(state.items)
            return {
                ...state,
                items: state.items.map(e => e.id === action.payload.userId ?  {...e, followed: true} : e)
            }
        case UN_FOLLOW :
            return {
                ...state,
                items: state.items.map(e => e.id === action.payload.userId ? {...e, followed: false} : e)
            }
        case SET_USERS :
            return {...state, items: action.payload.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage : action.payload.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalCount : action.payload.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching : action.payload.isFetching}

        default:
            return state
    }
}

type ActionType = ReturnType<typeof follow> |
    ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUserCount> |
    ReturnType<typeof toggleFetching>

export const follow = (id: number) => {
    console.log(id)
    return {
        type: FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const unFollow = (id: number) => {
    console.log(id)
    return {
        type: UN_FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const
}

export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalUserCount: totalUserCount
        }
    } as const
}
export const toggleFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching: isFetching
        }
    } as const
}