
const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'



export type usersInitialStateTypeNew = {
    items: Array<UsersType>
    totalCount: number,
    error: string
    pageSize: number
    currentPage: number
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
    currentPage: 1
}

export const usersReducer = (state: usersInitialStateTypeNew = usersInitialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.items.map(e => e.id === action.payload.userId ? {...e, followStatus: true} : e)
            }
        case UN_FOLLOW :
            return {
                ...state,
                users: state.items.map(e => e.id === action.payload.userId ? {...e, followStatus: false} : e)
            }
        case SET_USERS :
            return {...state, items: action.payload.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage : action.payload.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalCount : action.payload.totalUserCount}

        default:
            return state
    }
}

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUserCountAC>


export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const unFollowAC = (id: number) => {
    return {
        type: UN_FOLLOW,
        payload: {
            userId: id
        }
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const
}

export const setTotalUserCountAC = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalUserCount: totalUserCount
        }
    } as const
}