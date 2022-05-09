import React from 'react';
import logo from './logo.svg';
import { UseState } from './UseState.js'
import { ClassState } from './ClassState.js'
import { UseReducer } from './useReducer';
import './App.css';

function App() {
  return (
    <div className="App">
     <UseState name='UseState' />
     <ClassState name='Class State' />
     <UseReducer name='Use Reducer' />
    </div>
  );
}

export default App;
