import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReduxRootStoreType} from "../../redux/redux-store";
import styles from "./../common/FormControls/formControl.module.css"

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ( props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={`login`} name={`login`} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={`password`} name={`password`} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={`checkbox`} name={`rememberMe`} component={"input"} /> Remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


export const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: "login"
})(LoginForm)


export const LoginCreator = (props: OwnPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}></Redirect>
    }

    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: ReduxRootStoreType) : mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const Login = connect(mapStateToProps, {login})(LoginCreator)

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    isAuth:boolean
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}