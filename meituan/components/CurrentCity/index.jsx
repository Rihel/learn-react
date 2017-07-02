import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';
export default class CurrentCity extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return (
            <div className="current-city">
                <p>当前城市</p>
                {this.props.cityName}
            </div>
        );
    }
}
