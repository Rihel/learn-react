import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './todo.jsx'
import todoApp from './reducer'
let store = createStore(todoApp);




console.log('====================================');

console.log('====================================');

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
