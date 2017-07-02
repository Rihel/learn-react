import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getData} from '../../../api/api';
import HomeAd from '@com/HomeAd';
import Loading from '@com/loading';
import './style.scss'

class Ad extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state = {
        data: []
    }
    componentDidMount = async() => {
        let {data} = await getData('/homead');
        this.setState({data: data.data.ads})
    }

    render() {

        return (
            <div>
                {this.state.data.length > 0
                    ? <HomeAd data={this.state.data}/>
                    : <Loading/>
}
            </div>
        );
    }
}

export default Ad;