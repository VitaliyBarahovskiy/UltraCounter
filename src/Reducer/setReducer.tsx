const MAX_VALUE = 'MAX_VALUE'
const MIN_VALUE = 'MIN_VALUE'


export type ActionType = MaxValueType  | MinValueType

type MaxValueType = ReturnType<typeof MaxValueAC>
type MinValueType = ReturnType<typeof MinValueAC>



type initialStateType ={
    set: any[] ,
    payload: number
    setValue: any
}


const initialState: initialStateType = {
    set: [],
    payload: 1,
    setValue: 3

}



export const setReducer = (state= initialState,action: ActionType): initialStateType=>{
    switch(action.type) {
        case MAX_VALUE:
            return {...state, set: [...state.set, state.set]};
        case MIN_VALUE:
            return {...state, set: [...state.set, action.payload]};
        default:
            return state;
    }
};

// BAGA


const MaxValueAC = (set: [], error:boolean, payload: number) => {
    return { type: MAX_VALUE, set, payload} as const
}

const MinValueAC = (set: [],error: boolean, payload: number) => {
    return {type: MIN_VALUE, set, payload} as const
}
