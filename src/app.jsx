import style from './index.scss'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom';
var todolist = {
    name: "todos",
    todos: [{
        completed: false,
        title: 'finish exercise'
    }, {
        completed: false,
        title: 'lean jsx'
    }, {
        completed: true,
        title: 'lean react'
    }]
};
class Todo extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        addTaskTitle: '',
        todos: todolist.todos,
        type: 'all'
    }
    add = e => {
        let todos = this.state.todos;
        let title = this.refs.text;
        if (title.value === '') {
            alert('任务名不能为空');
            return;
        }
        todos.push({
            title: title.value,
            completed: false
        })
        this.setState({
            todos
        })
        title.value = '';
    }
    delete = key => {
        return () => {
            let todos = this.state.todos;
            todos.splice(key, 1);
            this.setState({
                todos
            })
        }
    }
    change = index => {
        return () => {
            let todos = this.state.todos;
            console.log(todos[index])
            todos[index].completed = !todos[index].completed;
            this.setState({
                todos
            })
        }
    }
    filter = atype => {
        return () => {
            let { type } = this.state;
            type = atype;
            this.setState({
                type
            })
        }
    }
    render() {
        let { todos, type } = this.state;
        return (
            <div>
                <input type="text" ref="text" onKeyDown={e => e.keyCode === 13 ? this.add() : false} />
                <input type="button" value={"添加"} onClick={this.add} />
                <TodoList todos={todos} delete={this.delete} type={type} change={this.change} />
                <Footer filter={this.filter} />
            </div>
        )
    }
}
class TodoList extends Component {
    render() {
        let { todos, type } = this.props
        console.log(type)
        return (
            <ul>
                {
                    todos.map((item, i) => {
                        switch (type) {
                            case 'active':
                                if (!item.completed) {
                                    return <TodoItem todo={item} key={i} change={this.props.change(i)} delete={this.props.delete(i)} />
                                }
                                break;
                            case 'completed':
                                if (item.completed) {
                                    return <TodoItem todo={item} key={i} change={this.props.change(i)} delete={this.props.delete(i)} />
                                }
                                break;
                            case 'all':
                                return <TodoItem todo={item} key={i} change={this.props.change(i)} delete={this.props.delete(i)} />
                        }
                    })
                }
            </ul>
        );
    }
}

class TodoItem extends Component {
    render() {
        return (
            <li style={{ textDecoration: this.props.todo.completed ? ' line-through' : 'none' }} onClick={this.props.change}>
                {this.props.todo.title} <input type="button" value="删除" onClick={this.props.delete} />
            </li>
        );
    }
}


class Footer extends Component {
    render() {
        return (
            <div>
                <span onClick={this.props.filter('active')}>active</span><span>  =============</span>
                <span onClick={this.props.filter('completed')}>completed</span><span>  =============</span>
                <span onClick={this.props.filter('all')}>all</span>
            </div>
        );
    }
}





let root = document.createElement('div');
document.body.appendChild(root);
render(<Todo />, root);