import React, {Component} from 'react'
import css from './index.css'

import Switch from 'Switch'
import Checkbox from 'Checkbox'

export default class Replacer extends Component {

    constructor(props) {
        super(props);
        ['g', 'i', 'm'].forEach(mod => {
            this[`onCheck${mod.toUpperCase()}`] = checked => this.onCheckModificator(mod, checked)
        })
    }

    onCheckModificator = (modificator, checked) => this.props.onCheckModificator(modificator, checked)

    render () {
        const {
            from,
            to,
            active,
            mods = '',
            onChangeFrom,
            onChangeTo,
            onSwitch
        } = this.props


        return <div className={active ? css.replacer : `${css.replacer} ${css.inactive}`}>
            <Switch checked={true} onSwitch={onSwitch}/>
            <label className={css.label}>
                <input value={from} onChange={e => onChangeFrom(e.target.value)} disabled={!active}/>
            </label>
            <label className={css.label}>
                <input value={to} onChange={e => onChangeTo(e.target.value)} disabled={!active}/>
            </label>
            {
                ['g', 'i', 'm'].map(flag => <Checkbox key={flag} checked={mods.includes(flag)} label={flag} onChange={this['onCheck' + flag.toUpperCase()]} disabled={!active}/>)
            }
        </div>
    }
}