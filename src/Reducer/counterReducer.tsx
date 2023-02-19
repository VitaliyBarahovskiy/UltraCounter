import React from "react";
import {Dispatch} from "redux";



export type ActionType = AddCountType | DeleteCountType | InputCountType

type AddCountType = ReturnType<typeof AddCountAC>
type DeleteCountType = ReturnType<typeof DeleteCountAC>
type InputCountType = ReturnType<typeof InputCountAC>

type initialStateType = {
    count: number,
    payload: number,
    minValue: number,
    maxValue: number
}


const initialState: initialStateType = {
    count:  0,
    payload: 1,
    minValue: 0,
    maxValue: 0

}

export const counterReducer = (state= initialState,action: ActionType):initialStateType=>{
    switch(action.type) {
        case 'ADD_COUNT':
            return {...state, count: state.count + action.payload};
        case 'DELETE_COUNT':
            return {...state, count: state.minValue};
        case 'INPUT_COUNT':
            return {...state, count: action.payload.minValue, maxValue: action.payload.maxValue, minValue: action.payload.minValue};
        default:
            return state;
    }
};




const AddCountAC = (count: number, payload: number) => {
    return { type: 'ADD_COUNT', count, payload} as const
}

const DeleteCountAC = (count: number, payload: number) => {
    return {type: 'DELETE_COUNT', count, payload} as const
}

export const  InputCountAC = (minValue: number, maxValue: number) => {
    return {type: 'INPUT_COUNT', payload: {minValue, maxValue}} as const
}

export let InputCountThunk = (minValue: number, maxValue: number)=> (dispatch: Dispatch)=> {
     dispatch(InputCountAC(minValue,  maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
}



