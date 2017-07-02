import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';


import './style.scss'

class Loading extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state={
        height:0
    }   
    componentDidMount = () => {
       this.setState({
           height:this.refs.loading.offsetWidth
       })
    }
    
    render() {
    
        return (
            <div className="loading" ref="loading" style={{height:this.state.height}}>
                  <span><i className="fa fa-spinner fa-pulse"></i></span>
                  <span>{this.props.text?text:'正在加载中....'}</span>
            </div>
        );
    }
}

export default Loading;