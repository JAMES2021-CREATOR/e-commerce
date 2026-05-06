import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar1 from './component/Navbar1.jsx'
import Footer from './component/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar1/>
    <App />
    <Footer/>

  </StrictMode>,
)
