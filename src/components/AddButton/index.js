import React, {Component} from 'react'
import css from './index.css'

export default class AddButton extends Component {
    render () {
        return <button className={css.button}>
            <span className={css.symbol}>➕</span> Добавить правило замены
        </button>
    }
}