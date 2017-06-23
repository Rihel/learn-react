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
        title: 'lean vue'
    }, {
        completed: true,
        title: 'lean vuex'
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
            <div className={style.todoBox}>
                <h3>任务列表</h3>
                <div className={style.form}>
                    <input type="text" ref="text"
                        onKeyDown={e => e.keyCode === 13 ? this.add() : false}
                        placeholder="请输入任务名" />
                    <input type="button" value={"添加"} onClick={this.add} className={style.btn} />
                </div>
                <p>筛选任务</p>
                <Footer filter={this.filter} />
                <p>点击任务名即可完成任务</p>
                <TodoList todos={todos} delete={this.delete} type={type} change={this.change} />

            </div>
        )
    }
}
class TodoList extends Component {
    render() {
        let { todos, type } = this.props
        console.log(type)
        return (
            <ul className={style.todoList}>
                {
                    todos.map((item, i) => {
                        switch (type) {
                            case 'active':
                                if (!item.completed) {
                                    return <TodoItem todo={item} index={i} key={i} change={this.props.change(i)} delete={this.props.delete(i)} />
                                }
                                break;
                            case 'completed':
                                if (item.completed) {
                                    return <TodoItem todo={item} index={i} key={i} change={this.props.change(i)} delete={this.props.delete(i)} />
                                }
                                break;
                            case 'all':
                                return <TodoItem todo={item} index={i} key={i} change={this.props.change(i)} delete={this.props.delete(i)} />
                        }
                    })
                }
            </ul>
        );
    }
}

const TodoItem = props => (
    <li onClick={props.change}>
        {props.index + 1}
        <span style={{ textDecoration: props.todo.completed ? ' line-through' : 'none' }}> {props.todo.title}</span>
        <input type="button" value="删除" onClick={props.delete} className={style.btn} />
    </li>
)


const Footer = props => (
    <div className={style.control}>
        <span onClick={props.filter('active')}>未完成</span>
        <span onClick={props.filter('completed')}>已完成</span>
        <span onClick={props.filter('all')}>所有</span>
    </div>
)




let root = document.createElement('div');
document.body.appendChild(root);
render(<Todo />, root);