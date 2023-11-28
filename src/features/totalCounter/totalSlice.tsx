import { createSlice } from "@reduxjs/toolkit";

interface CounterTotalState {
    value: number
}

const initialState: CounterTotalState ={
    value: 0  
} 

export const counterTotalSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        increment: (state, total) =>{
            state.value += total.payload

        },
        decrement: (state, total) => {
            if(state.value <= 0 ){
                state.value = 0
            }
            state.value -= total.payload
        }
    }
})

export const { increment, decrement } = counterTotalSlice.actions
export default counterTotalSlice.reducer