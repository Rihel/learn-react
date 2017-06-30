import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './router';

/**
 * 激活谷歌redux开发者工具window.devToolsExtension，createStore第三个参数
 */
const store = createStore(reducer,{}, window.devToolsExtension
    ? window.devToolsExtension()
    : undefined);
render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'))
