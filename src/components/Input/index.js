import React, {Component} from 'react'

export default class Input extends Component {
    render () {
        return <label>
            До
            <textarea onChange={this.props.onChange}/>
        </label>
    }
}