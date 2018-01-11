import React, {Component} from 'react'
import css from './index.css'

import Replacer from 'Replacer'
import ButtonWrapper from 'ButtonWrapper'
import Button from 'Button'

export default class Replacers extends Component {
    render () {
        const {
            replacers,
            onChangeFrom,
            onChangeTo,
            onCheckModificator
        } = this.props

        const replacersList = replacers.map((replacer, index) =>
            <Replacer
                key={index}
                from={replacer.from}
                to={replacer.to}
                onChangeFrom={value => onChangeFrom(index, value)}
                onChangeTo={value => onChangeTo(index, value)}
                onCheckModificator={(modificator, checked) => onCheckModificator(index, modificator, checked)}
            />
        )
        return <section className={css.replacers}>
            <header className={css.header}>
                <h2 className={css.change}>Пошаговая обработка текста регулярками</h2>
                <div className={css.from}>Что</div>
                <div className={css.to}>Чем</div>
            </header>
            {replacersList}
            <ButtonWrapper>
                <Button key='button' onClick={this.props.addReplacer}>
                    <span>➕</span>&nbsp;Добавить правило замены
                </Button>
            </ButtonWrapper>
        </section>
    }
}