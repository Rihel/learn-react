import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from '../pages/home';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import style from './style.scss'


const Nav = () => (
    <div className="navbar navbar-inverse">
        <div className="container">
            <Link className={`navbar-brand ${style.logo}`} to="/">
                <img className="img-responsive" src={require('./logo.svg')} alt="" />
            </Link>
            <form action="/" className="navbar-form navbar-left">
                <div className="form-group">
                    <input type="text" className="form-control" />
                </div>
                <input type="button" className="btn btn-primary" value="搜索" />
            </form>
            <ul className="nav navbar-right navbar-nav">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/">新手入门</Link></li>
                <li><Link to="/">API</Link></li>
                <li><Link to="/">关于</Link></li>
                <li><Link to="/">注册</Link></li>
            </ul>
        </div>
    </div>
)

const Footer = () => (
    <div>
        footer
    </div>
)


export default (...args) => {
    console.log(args)
    return (
        <Router>
            <div>
                <Nav />
                <div className="container">
                    <Route exact path='/' component={Home} />
                </div>
                <Footer />
            </div>
        </Router>
    )
}