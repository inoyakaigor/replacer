import React, {Component} from 'react'
import css from './index.css'

export default class Replacer extends Component {
    render () {
        const {from, to} = this.props
        return <div className={css.replacer}>
            <label>
                <input value={from}/>
            </label>
            <label>
                <input to={to}/>
            </label>
        </div>
    }
}