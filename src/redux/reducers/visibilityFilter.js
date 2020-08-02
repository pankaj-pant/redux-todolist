import * as actions from '../ActionTypes'

const VISIBILITY_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
  }


const visibilityFilter = (state = VISIBILITY_FILTERS.ALL, action) => {
    switch (action.type) {
        case actions.SET_FILTER:
            return action.payload.filter
        default:
            return state
    }
}

export default visibilityFilter