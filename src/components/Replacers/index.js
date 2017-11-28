import React, {Component} from 'react'
import Replacer from 'Replacer/index.js'
import './index.css'

export default class Replacers extends Component {
    render () {
        const {replacers} = this.props
        const replacersList = replacers.map((replacer, index) =>
            <Replacer key={index} from={replacer.from} to={replacer.to}/>
        )
        return <section className='replacers'>
            <header className='header'>
                <h2 className='change'>Замена</h2>
                <div className='from'>Что</div>
                <div className='to'>Чем</div>
            </header>
            {replacersList}
        </section>
    }
}