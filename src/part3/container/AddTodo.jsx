import React from 'react';
import {connect} from 'react-redux';
import {addTodo,updateUser} from '../actions';
const AddTodo = ({dispatch}) => (<input
    type="text"
    onKeyDown={e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        if (!e.target.value.trim()) 
            return;
        dispatch(addTodo(e.target.value));
        dispatch(updateUser(e.target.value))
        e.target.value = '';
    }
}}/>)
export default connect()(AddTodo)