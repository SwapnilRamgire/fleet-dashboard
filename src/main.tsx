import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import VehiclesProvider from './features/vehicles/VehiclesProvider.tsx'
import StatisticsProvider from './features/statistics/StatisticsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StatisticsProvider>
      <VehiclesProvider>
        <App />
      </VehiclesProvider>
    </StatisticsProvider>
  </StrictMode>,
)
