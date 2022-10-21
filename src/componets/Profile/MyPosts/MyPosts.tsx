import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/MyPost";
import {ActionTypes, profilePageType} from "../../../redux/state";
import {addPostAc, changeNewTextAc} from "../../../redux/profileReducer";


type profilePageTypeSpecial = profilePageType & {
    message: string
    dispatch: (action: ActionTypes) => void

}

export const MyPosts = (props: profilePageTypeSpecial) => {

    let postElements =
        props.postsData.map(e => <Post key={e.id} id={e.id} message={e.message} likesCount={e.likesCount}/>)

    const textareaRef = React.createRef <HTMLTextAreaElement>()

    const onButtonClickHandler = () => {

        props.dispatch(addPostAc(props.message))

    }

    const onChangetextAreaHadnler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(changeNewTextAc(e.currentTarget.value))
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={onChangetextAreaHadnler} ref={textareaRef}></textarea>
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