import {USERINFO_UPDATE} from '../actions/action';
export default(state = {}, action) => {
    switch (action.type) {
        case USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
};
