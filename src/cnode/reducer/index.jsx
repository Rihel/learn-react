import { TOGGLE_TAB } from '../actions';
import { combineReducers } from 'redux';
const toggleTab = (state ='all', action) => {
       
    switch (action.type) {
        case TOGGLE_TAB:
            return action.keyWord;
        default:
            return state;
    }
};

export default combineReducers({
    toggleTab
});