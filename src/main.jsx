import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import RoutesPages from './Routes/route';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesPages/>
  </StrictMode>,
)
