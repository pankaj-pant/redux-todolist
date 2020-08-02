import React from 'react';
import './App.css';
import store from './redux/store'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilter from './components/VisibilityFilters'


const App = () => {
  store.subscribe(() => console.log("State changed", store.getState()))

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;
