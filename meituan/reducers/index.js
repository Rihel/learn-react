import {
    combineReducers
} from 'redux';
import {
    INIT_CITYS
} from '../actions/action';

const citys = (state = {}, action) => {
    switch (action.type) {
        case INIT_CITYS:
            return Object.assign({}, state, action.citys);
        default:
            return state;
    }
}

export default combineReducers({
    citys
})