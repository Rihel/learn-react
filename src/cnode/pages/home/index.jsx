import React, { Component } from 'react';
import { toggleTab } from '../../actions';
import { connect } from 'react-redux';


const Tabs = connect(

)(({ dispatch }) => (
    <ul className="nav nav-tabs">
        <li className="active" onClick={e => dispatch(toggleTab('all'))}>
            <a href="#">全部</a>
        </li>
        <li onClick={() => dispatch(toggleTab('good'))}>
            <a href="#">精华</a>
        </li>
        <li onClick={() => dispatch(toggleTab('share'))}>
            <a href="#">分享</a>
        </li>
        <li onClick={() => dispatch(toggleTab('ask'))}>
            <a href="#">问答</a>
        </li>
        <li onClick={() => dispatch(toggleTab('job'))}>
            <a href="#">招聘</a>
        </li>
        <li onClick={() => dispatch(toggleTab('dev'))}>
            <a href="#">客户端测试</a>
        </li>
    </ul>
))

const mapStateToProps = (state, ownProps) => {
    return {
        tab: state.toggleTab
    }
}

const Home = ({tab}) => {
    return (
        <div className="row">
            <div className="col-md-8">
                <Tabs></Tabs>
                {tab}
            </div>
        </div>
    )
}
export default connect(mapStateToProps)(Home);