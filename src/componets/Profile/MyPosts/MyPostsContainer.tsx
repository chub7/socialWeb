import {addPostAc, postsDataType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ReduxRootStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    message:string,
    postsData: Array<postsDataType>
}
type mapDispatchToProps = {
    onButtonClickHandler:(message: string)=>void,
}
const mapStateToProps = (state: ReduxRootStoreType) : mapStateToPropsType => {
    return {
        message: state.profilePage.message,
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToProps => {
    return {
        onButtonClickHandler: (message: string) => {
            dispatch(addPostAc(message))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
