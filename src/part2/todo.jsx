import React, { Component } from 'react';
import {
    addTodo,
    deleteTodo
} from './action.js';
import { connect } from 'react-redux';



class TodoApp extends Component {
    render() {

        let { todos, add, deleteTodoFn } = this.props;
        console.log(this.props);
        return (
            <div>
                <input type="text" onKeyDown={
                    e => {
                        if (e.keyCode === 13) {
                            add(e.target.value);
                            e.target.value = '';
                        }
                    }
                } />
                <ul>
                    {
                        todos.map((item, index) => {
                            return <Todo todo={item} index={index} key={index} deleteTodoFn={deleteTodoFn}></Todo>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const Todo = ({ todo, index, deleteTodoFn }) => (
    <li>{todo.text}<button onClick={() =>deleteTodoFn(index) }>删除</button></li>
)


const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    add: text => dispatch(addTodo(text)),
    deleteTodoFn: index => dispatch(deleteTodo(index))
});




export default connect(mapStateToProps, mapDispatchToProps)(TodoApp, Todo);
