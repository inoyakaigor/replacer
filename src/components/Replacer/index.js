import React, {Component} from 'react'
import css from './index.css'

import Switch from 'Switch'
import Checkbox from 'Checkbox'

export default class Replacer extends Component {
    onCheckModificator = (modificator, checked) => this.props.onCheckModificator(modificator, checked)

    onCheckG = checked => this.onCheckModificator('g', checked)
    onCheckI = checked => this.onCheckModificator('i', checked)
    onCheckM = checked => this.onCheckModificator('m', checked)

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
            <Checkbox checked={true} label="g" onChange={this.onCheckG}/>
            <Checkbox checked={true} label="i" onChange={this.onCheckI}/>
            <Checkbox checked={true} label="m" onChange={this.onCheckM}/>
        </div>
    }
}