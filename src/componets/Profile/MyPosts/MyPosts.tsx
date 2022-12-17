import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/MyPost";
import {postsDataType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type profilePageTypeSpecial = {
    message: string
    onButtonClickHandler: (message: string) => void
    postsData: Array<postsDataType>

}

export const MyPosts = (props: profilePageTypeSpecial) => {

    let postElements =
        props.postsData
            .map(e => <Post key={e.id} id={e.id} message={e.message} likesCount={e.likesCount}/>)

    const onAddPost = (value:AddNewPostFormReduxType) => {
        props.onButtonClickHandler(value.postMessage)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormReduxType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"postMessage"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddNewPostFormReduxType>({form: 'addPost'})(AddNewPostForm)

type AddNewPostFormReduxType = {
    postMessage: string
}
