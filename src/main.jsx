import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Layer } from './ThemeProvider/Layer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layer>
      <App />
    </Layer>
  </StrictMode>,
)
