import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    const [editMode, setEditMode] = useState(() => false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        setStatus(e.currentTarget.value)
    }




    return <>
        {!editMode
            ? <div><span onDoubleClick={activateEditMode}>{props.status || `Empty status`}</span></div>
            : <div><input value={status} autoFocus onChange={onStatusChange}
                          onBlur={deactivateEditMode} onDoubleClick={activateEditMode}/></div>

        }

    </>


}
