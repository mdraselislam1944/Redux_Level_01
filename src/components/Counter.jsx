import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../Redux/Features/Counter/counterSlice';

const Counter = () => {

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    console.log(count)
    return (
        <div className='text-center my-5'>
            <button onClick={() => dispatch(incrementByValue(5))} className='btn btn-primary my-2'>increment by 5</button>
            <br />
            <button onClick={() => dispatch(increment())} className='btn btn-primary my-2'>increment</button><br/>
            <h2 className='btn btn-secondary my-2'>{count}</h2><br/>
            <button onClick={() => dispatch(decrement())} className='btn btn-primary'>decrement</button><br/>
        </div>
    );
};

export default Counter;