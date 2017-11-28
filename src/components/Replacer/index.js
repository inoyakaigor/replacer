import React, {Component} from 'react'
import './index.css'

export default class Replacer extends Component {
    render () {
        const {from, to} = this.props
        return <div className='replacer'>
            <label>
                <input value={from}/>
            </label>
            <label>
                <input to={to}/>
            </label>
        </div>
    }
}