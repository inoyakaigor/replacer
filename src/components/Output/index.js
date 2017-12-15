import React, {Component} from 'react'

export default class Output extends Component {
    render () {
        return <label>
            После
            <textarea value={this.props.output}  spellCheck='false'/>
        </label>
    }
}