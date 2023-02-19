import {ChangeEvent} from "react";
import s from "./Counter.module.css";

type InputType = {
    style: string,
    type: string,
    value: number,
    Focus: any,
    setValue: (value: number)=>void
    inputError: string
}


export const InputCompanent = ( props: InputType) => {


    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.setValue(+event.currentTarget.value)
    }


    return <div>
        <input className={s.textInput} type={props.type} value={props.value} onChange={onChangeHandler} onFocus={props.Focus}/>
    </div>
}