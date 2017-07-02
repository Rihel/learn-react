import {
    combineReducers
} from 'redux';
import {
    INIT_CITYS
} from '../actions/action';

import userInfo from './userinfo';

export default combineReducers({
    userInfo
})