import React, {Component} from 'react'
import css from './index.css'

import Input from 'Input'
import Output from 'Output'
import ButtonWrapper from 'ButtonWrapper'
import Button from 'Button'

export default class Textareas extends Component {
    render () {
        const {
            output,
            onChangeInput,
            onClick
        } = this.props
        return <div className={css['textareas-container']}>
            <Input onChange={onChangeInput}/>
            <Output output={output}/>
            <ButtonWrapper>
                <Button onClick={onClick}>
                    Обработать
                </Button>
            </ButtonWrapper>
        </div>
    }
}