import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import { GlobalStyle } from '@/styles'
import { Footer, Header } from './components'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
