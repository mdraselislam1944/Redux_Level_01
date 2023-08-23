import {createSlice} from "@reduxjs/toolkit";

const initialState={
    count:0,
};
const counterSlice=createSlice({

    name:'Counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count=state.count+1;
        },
        decrement:(state)=>{
            state.count=state.count-1;
        },
        incrementByValue:(state,actions)=>{
            state.count=state.count+actions.payload;
        },
    },
});

export const {increment,decrement,incrementByValue}=counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export default counterSlice;