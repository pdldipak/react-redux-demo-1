import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyPen } from '../redux'

function HookPenContainer() {
    const numberOfPens = useSelector(state => state.numberOfPens);
    const dispatch = useDispatch();
    return (
        <div>
        <h1>Hook container</h1>
            <h2>Number of Pens-{numberOfPens}</h2>
            <button onClick={()=>dispatch(buyPen())}>Pen</button>
            </div>
    )
}

export default HookPenContainer;