import React, {Component} from 'react';
import {updateUser, filter} from '../actions';
import {connect} from 'react-redux';
import AddTodo from '../container/AddTodo';
import FilterTodoList from '../container/FilterTodoList';
// const mapStateToProps = (state, ownProps) => {     return {         user:
// state.user     } }

const User = connect(state => ({user: state.user}))(({dispatch, user}) => (
    <div>
        {user}
    </div>
))
const Footer=connect()(({dispatch})=>(
    <ul>
        <li onClick={()=>dispatch(filter('SHOW_ALL'))}>显示所有</li>
        <li onClick={()=>dispatch(filter('SHOW_COMPLETED'))}>显示已完成</li>
        <li onClick={()=>dispatch(filter('SHOW_ACTIVE'))}>显示未完成</li>
        
    </ul>
))
export default class App extends Component {
    render() {
        return (
            <div>
                <User/>
                <AddTodo/>
                <FilterTodoList/>
                <Footer/>
            </div>
        );
    }
}