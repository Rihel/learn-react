import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    backHandle=()=>{
        window.history.back();
    }
    render() {
        return (
            <div className="header">
                <span className="fa fa-chevron-left" onClick={this.backHandle}></span>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}
