import React, {Component} from 'react';
import {toggleTab} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Tab extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isActive: 0,
        tabs: [
            {
                title: '全部',
                keyWord: 'all'
            }, {
                title: '精华',
                keyWord: 'good'
            }, {
                title: '分享',
                keyWord: 'share'
            }, {
                title: '问答',
                keyWord: 'ask'
            }, {
                title: '招聘',
                keyWord: 'job'
            }, {
                title: '客户端测试',
                keyWord: 'dev'
            }
        ]
    }
    changeTag = (keyWord, index) => () => {
        this
            .props
            .changeTab(keyWord);
        this.setState({isActive: index});
    }
    render() {
        return (
            <ul className="nav nav-tabs">
                {this
                    .state
                    .tabs
                    .map((item, index) => < Item key = {
                        index
                    }
                    className = {
                        index === this.state.isActive
                            ? 'active'
                            : ''
                    }
                    title = {
                        item.title
                    }
                    onClick = {
                        this.changeTag(item.keyWord, index)
                    } />)
}
            </ul>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeTab: bindActionCreators(toggleTab, dispatch)
    }
}
const Item = ({onClick, title, className}) => (
    <li onClick={onClick} className={className}>
        <a href="#">{title}</a>
    </li>
)
export default connect(null, mapDispatchToProps)(Tab)