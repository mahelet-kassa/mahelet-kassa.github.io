import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import CSS files
import '../css/base.css'
import '../css/main.css'
import '../css/vendor.css'
import '../css/fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

