import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss'

class HomeItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state = {
        data: []
    }
    render() {
        const {data} = this.props;
        return (
            <div className="home-ad">
                <h2 className="home-ad-title">超值特惠</h2>
                <div className="home-ad-list">
                    {data.map((item, index) => {
                    return <div key={index} className="home-ad-list-item">
                        <a href={item.link}>
                            <img src={item.img} alt=""/>
                        </a>
                    </div>
                })
}
                </div>
            </div>
        );
    }
}

export default HomeItem;