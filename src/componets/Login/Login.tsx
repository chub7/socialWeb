import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={`login`} name={`login`} component={"input"}/>
            </div>
            <div>
                <Field placeholder={`password`} name={`password`} component={"input"}/>
            </div>
            <div>
                <Field type={`checkbox`} name={`rememberMe`} component={"input"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export const Login = () => {

    const  onSubmit = (formData:FormDataType) => {

    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};