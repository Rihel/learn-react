import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {update} from '../../actions/action';
import Header from '@com/Header';
import {getData} from '../../api/api';
import CurrentCity from '@com/CurrentCity';
import CityList from '@com/CityList';
class City extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state = {
        citys: []
    }
    componentDidMount = async() => {
        let {data} = await getData('/citys');
        if (data.success) {
            this.setState({citys: data.data.citys});
        }
    }

    render() {
        return (
            <div >
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList citys={this.state.citys} changeFn={this.changeCity}/>
            </div>
        );
    }
    changeCity = name => {
        this
            .props
            .userInfoAction
            .update({cityName: name})
    }
}
const mapStateToProps = (state, ownProps) => {
    return {userInfo: state.userInfo}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userInfoAction: bindActionCreators({
            update
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City);