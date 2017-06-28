import React, {Component} from 'react';

import {connect} from 'react-redux';
import {toggleTodo} from '../actions';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>)}
    </ul>
)
const Todo = ({onClick, done, text}) => (
    <li
        onClick={onClick}
        style={{
        textDecoration: done
            ? 'line-through'
            : 'none'
    }}>
        {text}
    </li>
)
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.done)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.done)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)