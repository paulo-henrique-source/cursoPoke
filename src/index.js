import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
