// 這個是進入點 entry point
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NewApp from './NewApp.jsx'
import ArrayMethods from './ArrayMethods.jsx'
import Hooks from './Hook.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewApp />
    <ArrayMethods />
    <Hooks />
    <App />
  </React.StrictMode>,
)
``