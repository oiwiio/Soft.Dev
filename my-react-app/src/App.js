import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import './styles/index.css'

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div className='app_background'>
            <div className='counter-card'>
                <h1>Счет</h1>
                <div className='counter-controls'>
                    <button className='sign' onClick={() => dispatch(increment())}>+</button>
                    <span className='counter-value'>{count}</span>
                    <button className='sign' onClick={() => dispatch(decrement())}>-</button>
                </div>
            </div>
        </div>
    );
}

export default App;