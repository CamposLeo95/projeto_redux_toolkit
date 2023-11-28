import {createSlice } from "@reduxjs/toolkit"

interface CounterQuantityState {
    value: number
}

const initialState: CounterQuantityState = {
    value: 0
}

export const counterQuatitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers:{
        stateNow: (state, quantity) =>{
            state.value = quantity.payload
        },
    }
})

export const { stateNow } = counterQuatitySlice.actions
export default counterQuatitySlice.reducer