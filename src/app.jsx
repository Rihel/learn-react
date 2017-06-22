import style from './index.scss'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom';
class Hello extends Component {
    constructor(props) {
        super(props)
    }
    state = {

    }
    add = () => {

    }
    render() {
        return (
            <div className={style.box}>

            </div>
        )
    }
}

Hello.propTypes = {

}

let root = document.createElement('div');
document.body.appendChild(root);
render(<Hello />, root);