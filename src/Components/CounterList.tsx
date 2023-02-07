import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import React, {useEffect} from "react";


const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector





const CounterList: React.FC = ()=> {

    useEffect(  () => {} , [])


    const {count,payload, minValue, maxValue} = useTypeSelector(state => state.counter )
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
                <div className="App">
                    <button onClick={addCount}>inc</button>
                    <div style={{fontSize:"3rem"}}>{count}</div>
                    <button onClick={addDelete}>reset</button>
                </div>
        </div>
    )
}


export default CounterList;