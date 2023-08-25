import React from 'react';
import useCart from './useCart';

const Practice = () => {
    const data=useCart();
    console.log(data[0]);
    return (

        <div className='text-center'>
            <h1 className=''>Tan Stack query data </h1>
        </div>
    );
};

export default Practice;