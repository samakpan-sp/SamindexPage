import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './login/LoginScreen'
import Desktop from './desktop/Desktop'
import ContactWindow from './windows/ContactWindow'
import { cv } from './terminal/terminalContent'
import './index.css'

function GatedDesktop() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem('desktopos_loggedin') === 'true'
  )

  if (!loggedIn) {
    return <LoginScreen onSuccess={() => setLoggedIn(true)} />
  }

  return <Desktop />
}

function ResumePage() {
  useEffect(() => {
    window.location.href = cv.downloadUrl
  }, [])

  return (
    <div className="boot-placeholder">
      <h1>Redirecting to CV download…</h1>
      <a href={cv.downloadUrl} className="resume-fallback-link">
        Click here if the download doesn't start automatically
      </a>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="standalone-page">
      <ContactWindow />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<GatedDesktop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App