import React, {Component} from 'react'
import css from './index.css'

export default class Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked ? props.checked : false
        }
    }

    onChange = () => {
        this.setState({checked: !this.state.checked})
        this.props.onSwitch && this.props.onSwitch(!this.state.checked)
    }

    render () {
        return <label className={this.props.disabled ? `${css.switch} ${css.disabled}` : css.switch}>
                <input
                    type='checkbox'
                    onChange={this.onChange}
                    checked={this.state.checked}
                    disabled={this.props.disabled}
                />
                <span className={css.slider}></span>
            </label>
    }
}