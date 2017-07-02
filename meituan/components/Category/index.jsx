import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import './style.scss'
class Category extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    state = {
        index: 0
    }
    render() {
        let option = {
            auto: 2000,
            callback: index => {

                this.setState({index})
            }
        }

        return (
            <div className="category">
                <ReactSwipe className="carousel" swipeOptions={option}>
                    <div>
                        <ul className="slider">
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="slider">
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="slider">
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                            <li>
                                <i className="fa fa-truck"></i>
                                <span>火锅
                                </span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="poins">
                    <li
                        className={this.state.index === 0
                        ? 'active'
                        : ''}></li>
                    <li
                        className={this.state.index === 1
                        ? 'active'
                        : ''}></li>
                    <li
                        className={this.state.index === 2
                        ? 'active'
                        : ''}></li>
                </ul>
            </div>
        );
    }
}

export default Category;