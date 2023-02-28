import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
