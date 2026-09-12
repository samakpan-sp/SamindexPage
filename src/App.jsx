import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './login/LoginScreen'
import './index.css'

function GatedDesktop() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem('desktopos_loggedin') === 'true'
  )

  if (!loggedIn) {
    return <LoginScreen onSuccess={() => setLoggedIn(true)} />
  }

  return (
    <div className="boot-placeholder">
      <h1>Desktop shell — coming in Milestone 3</h1>
    </div>
  )
}

function ResumePlaceholder() {
  return <div className="boot-placeholder"><h1>Résumé — placeholder</h1></div>
}

function ContactPlaceholder() {
  return <div className="boot-placeholder"><h1>Contact — placeholder</h1></div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<ResumePlaceholder />} />
        <Route path="/contact" element={<ContactPlaceholder />} />
        <Route path="*" element={<GatedDesktop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App