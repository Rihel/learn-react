import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getData} from '../../../api/api';
import HomeAd from '@com/HomeAd';
import Loading from '@com/loading';
import ListComponent from '@com/List';
import LoadMore from '@com/LoadMore';
import './style.scss'

class List extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state = {
        data: [], //存储列表信息
        hasMore: false, //记录当前状态下，还有没有更多的数据可供加载
        isLoadingMore: false, //记录当前状态下，是“加载中。。”还是正在加载，
        page: 1
    }
    componentDidMount = () => {
        this.loadFirstPageData();
    }
    //获取首屏数据
    loadFirstPageData = async() => {
        const cityName = this.props.cityName;
        const {data} = await getData(`/homelist/${cityName}/0`);
        this.resultHandel(data)
    }
    //加载更多数据
    loadMoreData = async() => {
        const cityName = this.props.cityName;
        const page = this.state.page;
        this.setState({isLoadingMore: true});
        const {data} = await getData(`/homelist/${cityName}/${page}`);

        this.resultHandel(data)
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }
    resultHandel = result => {
        const {homelist, hasMore} = result.data;

        this.setState({
            data: this
                .state
                .data
                .concat(homelist),
            hasMore
        })
    }
    render() {

        return (
            <div className="home-list">
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.data.length > 0
                    ? <ListComponent data={this.state.data}/>
                    : <Loading/>}
                {this.state.hasMore
                    ? <LoadMore
                            isLoadingMore={this.state.isLoadingMore}
                            loadMoreFn={this.loadMoreData}/>
                    : <div></div>}
            </div>
        );
    }
}

export default List;