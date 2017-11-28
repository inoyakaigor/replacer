import React, {Component} from 'react'
import './index.css'

export default class AddButton extends Component {
    render () {
        return <button className='button add'>
            <span className='symbol'>➕</span> Добавить правило замены
        </button>
    }
}