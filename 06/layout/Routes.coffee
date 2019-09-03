import { Router } from '@reach/router'
import React from 'react'

import { Home } from '../pages/home'
import { About } from '../pages/about'

export Routes = ->
    <Router>
        <About path="/about" />
        <Home path="/" />
    </Router>
