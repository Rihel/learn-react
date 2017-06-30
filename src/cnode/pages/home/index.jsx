import React, {Component} from 'react';
import {toggleTab, getTest} from '../../actions';
import {connect} from 'react-redux';

import Tab from './tab';

const mapStateToProps = (state, ownProps) => {
    return {tab: state.toggleTab}
}

class Home extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount = () => {
        // getTest()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <Tab></Tab>
                    </div>
                    <div className="row">
                        {this.props.tab}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);