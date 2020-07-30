import React, { useState } from "react";
import {connect} from 'react-redux'
import {addedTodo} from '../redux/actionCreators'
import { v4 as uuidv4 } from 'uuid';


const AddTodo = ({addedTodo}) => {
    const [todo, setTodo] = useState("")
    
    const handleTodoChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmitTodo = (event) => {
        event.preventDefault()
        const id = uuidv4()
        addedTodo(id, todo)
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmitTodo}>
                <label>
                    Add Todo:    
                    <input type="text" name="todo" value={todo} onChange={handleTodoChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = {addedTodo}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)