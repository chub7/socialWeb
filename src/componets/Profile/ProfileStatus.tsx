import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component <PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status!== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {!this.state.editMode
                ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status || `Empty status`}</span></div>
                : <div><input value={this.state.status} autoFocus onChange={this.onStatusChange}
                              onBlur={this.deactivateEditMode} onDoubleClick={this.activateEditMode}/></div>
            }

        </>


    }
}
