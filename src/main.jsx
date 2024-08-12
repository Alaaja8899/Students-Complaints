import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ComplaintsContextProvider from './context/ComplaintsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComplaintsContextProvider>
    <App />
    </ComplaintsContextProvider>
  </React.StrictMode>,
)
