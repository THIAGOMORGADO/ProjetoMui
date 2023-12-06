import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import {BrowserRouter} from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts/themeContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
     <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </React.StrictMode>,
)
