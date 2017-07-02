import React, {Component} from 'react';
import {getCitys} from '../../actions/action.js';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import HomeHeader from '@com/HomeHeader';
import Category from '@com/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';
import './style.scss'

class Home extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        let userInfo = this.props.userInfo;
        return (
            <div>
                <HomeHeader cityName={userInfo.cityName}/>
                <Category/>
                <div style={{
                    height: '15px'
                }}></div>
                <Ad/>
                <div style={{
                    height: '15px'
                }}></div>
                <List cityName={userInfo.cityName}/>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {userInfo: state.userInfo}
}

export default connect(mapStateToProps)(Home);