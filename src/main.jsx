import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Component/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
