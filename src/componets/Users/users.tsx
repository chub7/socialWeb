import React from 'react';
import {UsersType} from "./usersReducer";
import {Paginator} from "./paginator";
import {User} from "./user";

export type usersType = {
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPageUsers: Array<UsersType>
    unFollow: (id: number) => void
    follow: (id: number) => void
    setCurrentPage: (id: number) => void
    totalCount: number
    followingProgress: Array<number>
}


export const Users = (props: usersType) => {

    return (
        <div>
            <Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage}
                       pageSize={props.pageSize} totalCount={props.totalCount}
            />
            {props.usersPageUsers.map(e =>
                    <User user={e}
                          unFollow={props.unFollow}
                          follow={props.follow}
                          followingProgress={props.followingProgress}
                          key={e.id}
                    />
            )}
        </div>
        )
    }
