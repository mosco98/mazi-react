import './assets/styles/main/theme.css'
import './assets/styles/scss/style.css'
import 'react-multi-carousel/lib/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'

import App from './App'
import { AppContextProvider } from './utils/context/context'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
