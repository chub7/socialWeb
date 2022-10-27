import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/MyPost";
import { postsDataType } from "../../../redux/state";



type profilePageTypeSpecial =  {
    message: string
    onChangetextAreaHadnler: (newtext: string) => void
    onButtonClickHandler: ()=>void
    postsData: Array<postsDataType>

}

export const MyPosts = (props: profilePageTypeSpecial) => {

    let postElements =
        props.postsData
            .map(e => <Post key={e.id} id={e.id} message={e.message} likesCount={e.likesCount}/>)

    const onButtonClickHandler = () => {
        props.onButtonClickHandler()
    }

    const onChangetextAreaHadnler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangetextAreaHadnler(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={onChangetextAreaHadnler} ></textarea>
                </div>
                <div>
                    <button onClick={onButtonClickHandler}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}