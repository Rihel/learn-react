import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss'

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                {data.map((item, index) => {
                    return <Item data={item} key={index}/>
                })}
            </div>
        );
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        const {data} = this.props;
        return (
            <a className="home-list-item">
                <div className="thumbail">
                    <img src={data.img} alt=""/>
                </div>
                <div className="text">
                    <div className="title">
                        <h2>{data.title}</h2>
                        <span>{data.distance}</span>
                    </div>
                    <p>{data.subTitle}</p>
                    <div className="detail">
                        <span>
                            ￥{data.price}
                        </span>
                        <i>
                            已售{data.number}份
                        </i>
                    </div>

                </div>
            </a>
        );
    }
}

export default ListComponent;