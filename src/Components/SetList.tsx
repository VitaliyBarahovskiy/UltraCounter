import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import React, { useState} from "react";
import {InputCompanent} from "./InputCompanent";
import {InputCountAC} from "../Reducer/counterReducer";



const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector




const SetList: React.FC = ()=> {

    const [InputValueMax, SetValueMax] = useState<number>(0)
    const [InputValueMin, SetValueMin] = useState<number>(0)


    const set = useTypeSelector(state => state.set )
    const dispatch = useDispatch()


    // const MaxValue = () => {
    //     dispatch({type: "MAX_VALUE" , payload: setValue})
    // }
    //
    // const MinValue = () => {
    //     dispatch({type: "MIN_VALUE" , payload: set})
    // }

    const SetCount = () => {
        dispatch(InputCountAC(InputValueMin, InputValueMax))
    }

    return (
        <div>
            <InputCompanent style={'ree'} type={'number'} value={InputValueMin} Focus={false} setValue={SetValueMin} />
            <InputCompanent style={'str'} type={'number'} value={InputValueMax} Focus={true} setValue={SetValueMax} />

            <div className="SetList">
                <button onClick={SetCount}>set</button>
            </div>
        </div>
            )

    }

export default SetList;