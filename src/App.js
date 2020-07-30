import React from 'react';
import './App.css';
import store from './redux/store'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


const App = () => {
  store.subscribe(() => console.log("State changed", store.getState()))

  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
