import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
  decrement, 
  increment, 
  incrementByAmount, 
  incrementAsync 
} from '../slice/counterSlice';
import { RootState } from '../store/store'

export const Prueba = () => {

  const dispatch = useDispatch()

  const count = useSelector((state: RootState) => state.counter.value)

  const [ value, setValue ] = useState('0')

  return (
    <div className="App">
      <h1>
        { count }
      </h1>

      <input type="text" 
        value={value} 
        onChange={({target}) =>setValue(target.value)}/>

      <br />
      
      <button 
        onClick={() => dispatch(increment())}>
        +1
      </button>
        
      <button
        onClick={() => dispatch(decrement())}>
        -1
      </button>

      <button
        onClick={() => dispatch(incrementAsync(Number(value) || 0))}>
        Agregar cantidad
      </button>
    </div>
  );
}
