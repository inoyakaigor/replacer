import React, {Component} from 'react'
import Replacers from 'Replacers'
import Textareas from 'Textareas'

const replacer = {from: '', to: ''}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            replacers: [
                ...this.getReplacers()
            ],
            input: '',
            output: ''
        }
    }

    getReplacers = () => {
        const savedReplacers = localStorage.getItem('replacers')
        if (savedReplacers)
            return JSON.parse(savedReplacers)
        else
            return [{...replacer}]
    }

    addReplacer = () =>
        this.setState({
            replacers : [
                ...this.state.replacers,
                {...replacer}
            ]
        })

    onChangeReplacer = (index, value, destination) => {
        const replacers = [...this.state.replacers]
        replacers[index][destination] = value
        this.setState({replacers})
        localStorage.setItem('replacers', JSON.stringify(replacers))
    }

    onChangeFrom = (index, value) => this.onChangeReplacer(index, value, 'from' )
    onChangeTo = (index, value) => this.onChangeReplacer(index, value, 'to')

    onChangeInput = ({target: {value}}) => this.setState({input: value})

    processText = () => {
        let output = ''
        const {input, replacers} = this.state
        output = input

        replacers.forEach(replacer => {
            output = output.replace(new RegExp(replacer.from, 'gi'), replacer.to)
        })

        this.setState({output})
    }

    render () {
        const {replacers, output} = this.state
        const replacersProps = {
                key: 'replacers',
                replacers: replacers,
                addReplacer: this.addReplacer,
                onChangeFrom: this.onChangeFrom,
                onChangeTo: this.onChangeTo
        }

        const textareasProps = {
            key: 'output',
            output,
            onChangeInput: this.onChangeInput,
            onClick: this.processText
        }

        return [
            <Replacers {...replacersProps}/>,
            <Textareas {...textareasProps}/>
        ]
    }
}