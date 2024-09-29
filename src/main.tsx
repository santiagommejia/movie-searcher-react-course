import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppSearch } from './AppSearch.tsx'
import './styles/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSearch/>
  </StrictMode>,
)
