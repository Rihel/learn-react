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
            <ul className="city-list">
                {this
                    .props
                    .citys
                    .map((item, index) => {
                        return <li  key={index} onClick={()=>this.clickHandle(item.name.replace(/市|半岛|地区|自治州|县|镇|岛/, ''))}>{item
                                .name
                                .replace(/市|半岛|地区|自治州|县|镇|岛/, '')}</li>
                    })}
            </ul>
        );
    }
    clickHandle = (name) => {
        this
            .props
            .changeFn(name);
            window.history.back();
    }
}
