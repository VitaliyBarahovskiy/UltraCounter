import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import React, {useEffect} from "react";
import s from './Counter.module.css'


const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector





const CounterList: React.FC = ()=> {


    const {count,payload, maxValue, minValue} = useTypeSelector(state => state.counter )
    const dispatch = useDispatch()




    const addCount = () => {
        if ( count < maxValue){
            dispatch({type: "ADD_COUNT" , payload: payload})
        }

    }

    const addDelete = () => {
        dispatch({type: "DELETE_COUNT" , payload: payload})
    }



    return (
        <div>
                <div className={s.counter}>
                    <button className={s.buttonClick} onClick={addCount}>inc</button>
                    <div className={s.count}>{count}</div>
                    <button  className={s.buttonClick} onClick={addDelete}>reset</button>
                </div>
        </div>
    )
}


export default CounterList;