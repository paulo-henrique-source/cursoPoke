import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import './global.css'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
