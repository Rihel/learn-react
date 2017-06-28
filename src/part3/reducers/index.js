import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, FILTER, UPDATE_USER} from '../actions';
const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {id: action.id, text: action.text, done: false};
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                done: !state.done
            })
        default:
            return state;
    }
};
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case TOGGLE_TODO:
            return state.map(t => todo(t, action))
        default:
            return state
    }
}
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case FILTER:
            return action.filter
        default:
            return state
    }
}
const user = (state = 13533797833, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return action.phone;
        default:
            return state;
    }
}

export default combineReducers({todos, visibilityFilter, user})