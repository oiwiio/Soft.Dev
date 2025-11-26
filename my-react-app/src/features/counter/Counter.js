import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import styles from './Counter.module.css'

import { CounterButton } from "./CounterButton";
import { CounterDisplay } from "./CounterDisplay";

    export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    
    return (
        <div>
            <div>
                <CounterButton onClick={() => dispatch(increment())} />
                    Increment
                <CounterDisplay count /> 
                <CounterButton onClick={() => dispatch(decrement())} />
                    Decrement
            </div>
        </div>
    )
}