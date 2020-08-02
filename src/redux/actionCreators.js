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

export const setFilter = (filter) => ({
    type: actions.SET_FILTER,
    payload: {
        filter: filter
    }
})

export const getTodosByVisibilityFilter = (state, visibilityFilter) => {
    const allTodos = state.todos
    switch (visibilityFilter) {
        case "completed":
            return allTodos.filter(todo => todo.completed);
        case "incomplete":
            return allTodos.filter(todo => !todo.completed);
        case "all":
              return allTodos
        default:
            return allTodos
    }
}