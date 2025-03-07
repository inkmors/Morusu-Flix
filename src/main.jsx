import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesPages from './Routes/route';
import './main.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer autoClose={3000}/>
    <RoutesPages/>
  </StrictMode>,
)
