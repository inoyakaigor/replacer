import React, {Component} from 'react'
import css from './index.css'

export default class Replacer extends Component {
    render () {
        const {
            from,
            to,
            onChangeFrom,
            onChangeTo
        } = this.props

        return <div className={css.replacer}>
            <label>
                <input value={from} onChange={e => onChangeFrom(e.target.value)}/>
            </label>
            <label>
                <input to={to} onChange={e => onChangeTo(e.target.value)}/>
            </label>
        </div>
    }
}