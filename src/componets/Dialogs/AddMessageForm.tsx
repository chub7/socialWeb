import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type FormDataType = {
    newMessageBody: string
}
export type AddMessageType ={
    onSumbit:(newMessageBody: string) => void
}
const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} validate={[required, maxLength50]}/>
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

