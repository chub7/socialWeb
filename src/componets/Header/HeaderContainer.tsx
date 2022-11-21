import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxRootStoreType} from "../../redux/redux-store";
import {dataType, setUserDataAC} from "../../redux/auth-reducer";


export class  HeaderContainerAPI extends React.Component<OwnPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(response =>{
                if (response.data.resultCode === 0) {

                    let {id, login, email} = response.data.data
                    this.props.setUserDataAC(id, email, login)
                }
            })
    }

    render (){
        return (
            <Header auth={this.props.auth}/>
        )
    }
}

// type PathParamsType = {
//
// }
// type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type mapStateToPropsType = {
    auth: dataType
}
type mapDispatchToPropsType = {
    setUserDataAC: (id: number | null,
                    email: string | null,
                    login: string | null)=>void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = ( state: ReduxRootStoreType) : mapStateToPropsType => {
return{
    auth: state.auth
}
}

export const HeaderContainer = connect(mapStateToProps,{setUserDataAC})(HeaderContainerAPI)