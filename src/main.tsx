import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import VehiclesProvider from './features/vehicles/provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VehiclesProvider>
      <App />
    </VehiclesProvider>
  </StrictMode>,
)
