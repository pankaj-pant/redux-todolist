import React from 'react';
import {connect} from 'react-redux'
import {removedTodo, toggledTodo, getTodosByVisibilityFilter} from '../redux/actionCreators'

const TodoList = ({todos, removedTodo, toggledTodo}) => {

    const handleDelete = (id) => {
        removedTodo(id)
    }
    const handleToggle = (id) => {
        toggledTodo(id)
    }
    return (
        <div>
            {todos.length > 0 ? null : <p>No todos, yay!</p>}
            {todos.map(todo =>
                <div key={todo.id}>
                    <p>
                        <span onClick={() => handleToggle(todo.id)}>
                            {todo.completed ? <span style={{textDecoration: "line-through"}}>{todo.description}</span> : todo.description}
                        </span>{" "}
                        <i class="fas fa-trash-alt" onClick={() => handleDelete(todo.id)}></i>
                        {/* <button onClick={() => handleDelete(todo.id)}>Delete</button> */}
                    </p>
                </div> 
            )}

        </div>
    )
}

const mapStateToProps = (state) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
}

const mapDispatchToProps = {removedTodo, toggledTodo}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)