import React, {Component} from 'react'
import css from './index.css'

export default class AddButton extends Component {
    render () {
        return <button className={css.button} onClick={this.props.onClick}>
            <span className={css.symbol}>➕</span>&nbsp;Добавить правило замены
        </button>
    }
}