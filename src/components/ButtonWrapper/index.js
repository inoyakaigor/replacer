import React, {Component} from 'react'
import css from './index.css'

export default function ButtonWrapper({children}) {
    return <footer className={css['button-wrapper']}>{children}</footer>
}