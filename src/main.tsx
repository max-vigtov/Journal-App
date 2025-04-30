import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </BrowserRouter>
  </StrictMode>,
)
