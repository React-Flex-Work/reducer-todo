import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/Reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = item => {
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
  };

  const toggleCompleted = id => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoForm clearCompleted={clearCompleted} addTodo={addTodo} />
      <TodoList initialTodos={state.initialTodos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
