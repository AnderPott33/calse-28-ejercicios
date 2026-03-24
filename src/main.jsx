
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { App } from './App.jsx'
import { Navbar } from './components/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.querySelector('#root')).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
