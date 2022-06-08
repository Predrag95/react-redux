import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmmount, reset } from './counterSlice';

const Counter = () => {

  const [incrementAmmount, setIncrementAmmount] = useState(0);
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch();
  const addValue = Number(incrementAmmount) || 0;

  const resetAll = () => {
    setIncrementAmmount(0);
    dispatch(reset())
  };

  return (
    <div className='counter-wrapper'>
      <h6>{`Counter Number: ${count}`}</h6>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <input 
        type="text" 
        value={incrementAmmount}
        onChange={(e) => setIncrementAmmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmmount(addValue))}>Add Ammount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
} 

export default Counter