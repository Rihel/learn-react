import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss'

class LoadMore extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state = {
        count: 0
    }
    loadMoreHandle = () => {
        this
            .props
            .loadMoreFn();
    }
    componentDidMount = () => {
        let timeoutId;
        let wrapper = this.refs.wrapper;
        console.log();
        const callback = () => {
            let wrapperTop = wrapper
                .getBoundingClientRect()
                .top;
            let max = window.screen.height;
            console.log(wrapperTop, max)
            if (wrapperTop && wrapperTop < max) {
                if (this.state.count < 3) {
                    this
                        .props
                        .loadMoreFn();
                    this.setState({
                        count: this.state.count + 1
                    });
                }
            }
        }

        window.addEventListener('scroll', e => {
            // if (this.props.isLoadingMore) {     return; }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50)
        }, false)
    }

    render() {

        return (
            <div className="load-more" ref="wrapper">
                {this.props.isLoadingMore
                    ? <span>
                            <i className="fa fa-spinner fa-pulse"></i>加载中...</span>
                    : <span onClick={this.loadMoreHandle}>加载更多</span>
}
            </div>
        );
    }
}

export default LoadMore;