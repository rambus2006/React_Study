// React 와 ReactDOM 에서 뭔가를 받아옴 (package .json )
import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
