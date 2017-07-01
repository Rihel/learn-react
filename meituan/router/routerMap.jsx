import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Home from '../containers/home/home';
export default class RouterMap extends Component {
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
        setTimeout(()=>{
            this.setState({
                isDone:true
            })
        },100)
    }
    
    render() {
        return (
            <Router>

                {this.state.isDone
                    ? <div>
                            <Route exact path='/' component={Home}/>
                        </div>
                    : <div>正在加载中...</div>
}   
            </Router>
        );
    }
}