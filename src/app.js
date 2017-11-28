import React, {Component} from 'react'
import Replacers from 'Replacers'
import AddButton from 'AddButton'

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
            <AddButton key='AddButton'/>,
            // <Output>
        ]
    }
}