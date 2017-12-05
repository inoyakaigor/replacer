import React, {Component} from 'react'
import Replacer from 'Replacer/index.js'
import AddButton from 'AddButton'
import css from './index.css'

export default class Replacers extends Component {
    render () {
        const {replacers, onChangeFrom, onChangeTo} = this.props
        const replacersList = replacers.map((replacer, index) =>
            <Replacer
                key={index}
                from={replacer.from}
                to={replacer.to}
                onChangeFrom={value => onChangeFrom(index, value)}
                onChangeTo={value => onChangeTo(index, value)}
            />
        )
        return <section className={css.replacers}>
            <header className={css.header}>
                <h2 className={css.change}>Замена</h2>
                <div className={css.from}>Что</div>
                <div className={css.to}>Чем</div>
            </header>
            {replacersList}
            <footer className={css['add-button-wrapper']}>
                <AddButton key='AddButton' onClick={this.props.addReplacer}/>
            </footer>
        </section>
    }
}