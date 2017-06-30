import {createStore} from 'redux';
import reducer from '../reducers';
export default initData => createStore(reducer, initData, window.devToolsExtension
    ? window.devToolsExtension()
    : undefined)