import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom';
import './style.scss'
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {

        return (
            <div className="head">
                <Link className="city" to="/city">
                    {this.props.cityName}
                    &nbsp;
                    <i className="fa fa-fw fa-angle-down"></i>
                </Link>
                <div className="search-bar">
                    <i className="fa fa-search"></i>
                    <input type="text" className="search" placeholder="请输入关键词"/>
                </div>
                <div className="user">
                    <i className="fa fa-user"></i>
                </div>
            </div>
        );
    }
}

export default HomeHeader;