import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss'
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="head">
                <div className="city">
                    北京 <i className="fa fa-fw fa-angle-down"></i>
                </div>
                <div className="search-bar">
                    <i className="fa fa-search"></i>
                    <input type="text" className="search" />
                </div>
                <div className="user">
                    <i className="fa fa-user"></i>
                </div>
            </div>
        );
    }
}

export default HomeHeader;