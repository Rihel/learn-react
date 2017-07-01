import React, { Component } from 'react';
import { getCitys } from '../../actions/action.js';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import HomeHeader from '@com/HomeHeader';

import './style.scss'

class Home extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let data = this.props.getAllCitys();
        return (
            <div>
                <HomeHeader />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        citys: state.citys
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllCitys: () => getCitys()
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);