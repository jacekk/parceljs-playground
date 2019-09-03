import { Link } from '@reach/router'
import React from 'react'

import logoPath from '../../images/app-logo.png'

import { Routes } from './Routes'
import './App.sass'

export App = ->
    <div>
        <header>
            <img className="app-logo" src={logoPath} alt="logo" />
            <nav className="app-menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
        <main className="app-main">
            <Routes />
        </main>
    </div>
