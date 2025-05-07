import React from 'react'
import ReactDOM from 'react-dom/client'
import CalendarTestPage from './pages/CalendarTestPage'

console.log('[calendar-test-main.tsx] Script execution started.');

// Optional: Add basic CSS reset or global styles if desired, but avoid MUI ThemeProvider here
// import './index.css' // Example if you have a global CSS file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalendarTestPage />
  </React.StrictMode>,
) 