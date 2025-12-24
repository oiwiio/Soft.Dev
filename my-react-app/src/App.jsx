import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import './styles/index.scss'
import { CounterDisplay } from './features/counter/CounterDisplay';
import { CounterButton } from './features/counter/CounterButton';
import { UserList } from './fake_data/user.list';



export const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div className='app_background'>
            
            <div className='counter-card'>
                <h1>Счет</h1>
                <div className='counter-controls'>
                    <CounterButton label={'-'} onClick={() => dispatch(decrement())}/> 
                    <CounterDisplay count={count} />              
                    <CounterButton label={'+'} onClick={() => dispatch(increment())}/> 
                </div>
            </div>
            <UserList />
            
        </div> 
        
    );
}
