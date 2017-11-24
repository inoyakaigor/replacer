import React, {Component} from 'react'
import Replacers from 'Replacers'

export default class App extends Component {
    constructor() {
        super()
        const a = {a:1, b:2}
        this.state = {...a}
    }

    render () {
        return [
            <Replacers key='replacers'/>,
            // <AddButton>,
            // <Output>
        ]
    }
}