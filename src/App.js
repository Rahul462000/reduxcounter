import React from 'react'
import "./App.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incNumber } from './actions/index';
import { decNumber } from './actions/index';

const App = () => {
  // iski help se component ko call bhi karenge aur get bhi karenge
  const myState = useSelector((state) =>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <a className="quantity__minus" title='Decrement' onClick={() => dispatch(decNumber(2))}><span>-</span></a>
        <input name='quantity__plus' type="text" className='quantity__input' value={myState} />
        <a className="quantity__plus" title='Increment' onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>

    </div>
  )
}

export default App
