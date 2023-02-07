import {ChangeEvent} from "react";

type InputType = {
    style: string,
    type: string,
    value: number,
    Focus: any,
    setValue: (value: number)=>void
}


export const InputCompanent = ( props: InputType) => {


    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.setValue(+event.currentTarget.value)
    }


    return <div>
        <input className={props.style} type={props.type} value={props.value} onChange={onChangeHandler} onFocus={props.Focus}/>
    </div>
}