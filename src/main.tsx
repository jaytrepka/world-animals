import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fredoka font bundled with the app (works offline, e.g. in the desktop version)
import '@fontsource/fredoka/400.css'
import '@fontsource/fredoka/500.css'
import '@fontsource/fredoka/600.css'
import '@fontsource/fredoka/700.css'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
