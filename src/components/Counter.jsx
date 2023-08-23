import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/Features/Counter/counterSlice';

const Counter = () => {

    const {count}=useSelector((state)=>state.counter);
    const dispatch=useDispatch();
console.log(count)
    return (
        <div>
                        <button onClick={()=>dispatch(increment(5))}>increment by 5</button>
                        <br />
            <button onClick={()=>dispatch(increment())}>increment</button>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;