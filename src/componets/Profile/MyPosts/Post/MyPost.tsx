import React from "react";
import s from "./MyPost.module.css";
import {postsDataType} from "../../../../redux/state";

export const Post = (props:postsDataType) => {
    return (
        <div className={s.item}>
            <img src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" alt="" />
            {props.message}
        </div>
    )
}