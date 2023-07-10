import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-n13bzjhem3ppzfcj.us.auth0.com"
    clientId="l7EZMm9nKWVHYAG05mAU8eVSDYywsehQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </Auth0Provider>
  </React.StrictMode>,
)
