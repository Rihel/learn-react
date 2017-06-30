import {combineReducers} from 'redux';

const test = (state = 0, action) => {
    switch (action.type) {
        case 'TYPE1':
            return action.id;
        default:
            return state;
    }
}

export default combineReducers({
    test
})