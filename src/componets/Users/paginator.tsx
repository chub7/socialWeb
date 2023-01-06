import React from 'react';
import s from "./user.module.css";
import {usePageUsers} from "./hooks/usePageUsers";


type PaginatorType = {
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalCount: number
}

export const Paginator = (props: PaginatorType) => {

    let pages = usePageUsers(props.totalCount, props.pageSize)

    return (
        <div>
            {pages.map((el, i) =>
                <span key={i} onClick={() => {
                    props.onPageChanged(el)
                }}
                      className={props.currentPage === el ? s.selectedPage : ``}>
                    {el}
                </span>
            )}
        </div>

    )
}
