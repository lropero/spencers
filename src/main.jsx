import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import Sign from './components/sign'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Sign />
    <App />
  </BrowserRouter>
)
