import React, {Component} from 'react'
import Replacers from 'Replacers'
import Textareas from 'Textareas'

const replacer = {active: true, from: '', to: '', mods: 'gi'}

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
    onChangeActive = (index, checked) => this.onChangeReplacer(index, checked, 'active')
    onChangeMods = (index, mods) => this.onChangeReplacer(index, mods, 'mods')


    onCheckModificator = (index, modificator, checked) => {
        const replacer = [...this.state.replacers][index]
        if (checked) {
            this.onChangeMods(index, replacer.mods ? replacer.mods + modificator : modificator)
        } else {
            this.onChangeMods(index, replacer.mods ? replacer.mods.split(modificator).join('') : '')
        }

    }

    onChangeInput = ({target: {value}}) => this.setState({input: value})

    processText = () => {
        let output = ''
        const {input, replacers} = this.state
        const n = String.fromCharCode(10)
        const r = String.fromCharCode(13)
        output = input

        replacers.forEach(replacer => {
            if (!replacer.active) return

            let replacerTo = replacer.to
            if (/\\n/.test(replacer.to))
                replacerTo = replacer.to.split('\\n').join(n)

            if (/\\r/.test(replacer.to))
                replacerTo = replacer.to.split('\\r').join(r)

            output = output.replace(new RegExp(replacer.from, replacer.mods ? replacer.mods : 'gi'), replacerTo)
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
                onChangeTo: this.onChangeTo,
                onCheckModificator: this.onCheckModificator,
                onSwitch: this.onChangeActive
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