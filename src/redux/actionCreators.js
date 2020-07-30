import * as actions from './ActionTypes'

export const addedTodo = (id, description) => ({
    type: actions.ADDED_TODO,
    payload: {
        id: id,
        description: description
    }
})

export const removedTodo = (id) => ({
    type: actions.REMOVED_TODO,
    payload: {
        id: id
    }
})

export const toggledTodo = (id) => ({
    type: actions.TOGGLED_TODO,
    payload: {
        id: id
    }
})