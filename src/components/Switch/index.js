import React, {Component} from 'react'
import css from './index.css'

export default class Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked
        }
    }

    onChange = () => {
        this.setState({checked: !this.state.checked})
        this.props.onChange && this.props.onChange()
    }

    render () {
        return <label className={css.switch}>
                <input type='checkbox' onChange={this.onChange} checked={this.state.checked}/>
                <span className={css.slider}></span>
            </label>
    }
}