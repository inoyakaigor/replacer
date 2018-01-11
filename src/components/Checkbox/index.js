import React, {Component} from 'react'
import css from './index.css'

export default class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked
        }
    }

    onChange = () => {
        this.setState({checked: !this.state.checked})
        this.props.onChange && this.props.onChange(!this.state.checked)
    }

    render () {
        return <label className={css.checkbox}>
                <input type='checkbox' onChange={this.onChange} checked={this.state.checked}/>
                <svg className={css.icon} viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                    <polyline className={css.tick} points="0.2608 3.9 3.1312 6 7.3016 0.3"/>
                </svg>
                <span className={css.label}>
                    {this.props.label ? this.props.label : null}
                </span>
            </label>
        }
    }