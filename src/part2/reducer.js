import {combineReducers} from 'redux'
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, DELETE_TODO} from './action'
const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    text: action.text,
                    done: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        case DELETE_TODO:

            state = state.splice(action.index, 1);
            return state
        default:
            return state
    }
}

const todoApp = combineReducers({visibilityFilter, todos})

export default todoApp