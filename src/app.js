import React, {Component} from 'react'
import Replacers from 'Replacers'

const replacer = {from: '', to: ''}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            replacers: [
                {...replacer}
            ]
        }
    }

    addReplacer = () => {
        this.setState({replacers : [...this.state.replacers, {...replacer}]})
    }

    onChange = (index, value, destination) => {
        const replacers = [...this.state.replacers]
        replacers[index][destination] = value
        this.setState({replacers})
    }

    onChangeFrom = (index, value) => this.onChange(index, value, 'from' )
    onChangeTo = (index, value) => this.onChange(index, value, 'to')

    render () {
        const {replacers} = this.state
        return [
            <Replacers
                key='replacers'
                replacers={replacers}
                addReplacer={this.addReplacer}
                onChangeFrom={this.onChangeFrom}
                onChangeTo={this.onChangeTo}
            />,
            // <Output>
        ]
    }
}