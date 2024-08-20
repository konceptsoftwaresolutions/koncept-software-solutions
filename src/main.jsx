import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// routes
import ProvidedRoutes from './routes/ProvidedRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProvidedRoutes>
      <App />
    </ProvidedRoutes>
  </StrictMode>,
)
