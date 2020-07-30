import React from 'react';
import {connect} from 'react-redux'
import {removedTodo, toggledTodo} from '../redux/actionCreators'

const TodoList = ({state, removedTodo, toggledTodo}) => {

    const handleDelete = (id) => {
        removedTodo(id)
    }
    const handleToggle = (id) => {
        toggledTodo(id)
    }
    return (
        <div>
            <h2>List of items</h2>
            {state.map(todo =>
                <div key={todo.id}>
                    <p>
                        <span onClick={() => handleToggle(todo.id)}>
                            {todo.completed ? <span style={{textDecoration: "line-through"}}>{todo.description}</span> : todo.description}
                        </span>{" "}
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </p>
                </div> 
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = {removedTodo, toggledTodo}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)