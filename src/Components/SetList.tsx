import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import React, {useEffect, useState} from "react";
import {InputCompanent} from "./InputCompanent";
import {InputCountAC, InputCountThunk} from "../Reducer/counterReducer";
import s from './Counter.module.css'




const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector

    // useEffect(  () => {localStorage.setItem()} , [])


const SetList: React.FC = ()=> {

    const [InputValueMax, SetValueMax] = useState<number>(0)
    const [InputValueMin, SetValueMin] = useState<number>(0)

    const inputError = InputValueMin >= InputValueMax || InputValueMin < 0 ? 'inputError' : 'inputClass'


    const set = useTypeSelector(state => state.set )
    const dispatch = useDispatch()


    useEffect(() => {
        let minValueString = localStorage.getItem("minValue")
        let maxValueString = localStorage.getItem("maxValue")
        if(minValueString && maxValueString) {
            dispatch(InputCountAC(+minValueString, +maxValueString))
            SetValueMax(+maxValueString)
            SetValueMin(+minValueString)
        }
    }, [])

    const SetCount = () => {
        //@ts-ignore
        dispatch(InputCountThunk(InputValueMin, InputValueMax))
       // dispatch(InputCountAC(InputValueMin, InputValueMax))
       //  localStorage.setItem('minValue', JSON.stringify(InputValueMin))
       //  localStorage.setItem('maxValue', JSON.stringify( InputValueMax))
    }

    return (
        <div className={s.input}>
            <div>Min Value</div>
            <InputCompanent inputError={inputError} style={'ree'} type={'number'} value={InputValueMin} Focus={false} setValue={SetValueMin} />
            <div>Max Value</div>
            <InputCompanent inputError={inputError} style={'str'} type={'number'} value={InputValueMax} Focus={true} setValue={SetValueMax} />

            <div >
                <button className={s.buttonClick} onClick={SetCount}>set</button>
            </div>
        </div>
            )

    }

export default SetList;