import React, {Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Home from '../containers/home/home';
import City from '../containers/City';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {update} from '../actions/action';
import {getStorage} from '../until';
import Loading from '@com/loading';
class RouterMap extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state = {
        isDone: false
    }
    componentWillMount = () => {
        //从local storage获取城市
        let cityName = getStorage('cityName');
        if (cityName == null) {
            cityName = '北京'
        }

        //将城市信息存储到redux？？
        this
            .props
            .userInfoAction
            .update({cityName})
        this.setState({isDone: true})

    }

    render() {
        return (
            <HashRouter>

                {this.state.isDone
                    ? <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/city' component={City}/>
                        </Switch>
                    : <Loading/>}
            </HashRouter>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userInfoAction: bindActionCreators({
            update
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RouterMap);