import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
export type FormDataType = {
    newMessageBody: string
}
export type AddMessageType ={
    onSumbit:(newMessageBody: string) => void
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'addMessage'})(AddMessageForm)

export const AddMessage = (props:AddMessageType) => {

    const onSubmit = (formData: FormDataType) => {
        props.onSumbit(formData.newMessageBody)
    }

    return (
        <div>
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

