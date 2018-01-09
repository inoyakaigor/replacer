import React, {Component} from 'react'
import css from './index.css'

import Switch from 'Switch'

export default class Replacer extends Component {
    render () {
        const {
            from,
            to,
            onChangeFrom,
            onChangeTo
        } = this.props

        return <div className={css.replacer}>
            <Switch checked={true}/>
            <label className={css.label}>
                <input value={from} onChange={e => onChangeFrom(e.target.value)}/>
            </label>
            <label className={css.label}>
                <input value={to} onChange={e => onChangeTo(e.target.value)}/>
            </label>
        </div>
    }
}