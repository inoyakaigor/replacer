import React, {Component} from 'react'
import css from './index.css'

export default function Button({children, onClick}) {
    return <button
        className={css.button}
        onClick={onClick}
    >
        {children}
    </button>
}