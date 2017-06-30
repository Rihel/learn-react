import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store'
import RouterMap from './router/routerMap';



let store=createStore();
render(
    <Provider store={store}>
        <RouterMap></RouterMap>
    </Provider>,document.getElementById('root')
)
