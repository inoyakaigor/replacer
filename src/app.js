import React, {Component} from 'react'
import Replacers from 'Replacers'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            replacers: [
                {from: '', to: ''},
                {from: '', to: ''},
                {from: '', to: ''},
                {from: '', to: ''},
                {from: '', to: ''},
                {from: '', to: ''},
            ]
        }
    }

    render () {
        const {replacers} = this.state
        return [
            <Replacers key='replacers' replacers={replacers}/>,
            // <AddButton>,
            // <Output>
        ]
    }
}