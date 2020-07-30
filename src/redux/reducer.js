import * as actions from './ActionTypes'

const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADDED_TODO:
            return [...state, {id: action.payload.id, description: action.payload.description, completed: false}]
        case actions.REMOVED_TODO:
            return state.filter(item => item.id !== action.payload.id)
        case actions.TOGGLED_TODO:
            return state.map(item => item.id === action.payload.id ? {...item, completed: !item.completed} : item)
        default:
            return state
    }
}

export default reducer