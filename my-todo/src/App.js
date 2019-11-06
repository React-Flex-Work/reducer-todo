import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div className="App">
      <h1>My Todo List</h1>
    </div>
  );
}

export default App;
