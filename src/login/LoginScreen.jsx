import { useState } from 'react'
import './LoginScreen.css'

const ENTRY_CODE = '07'
const USERNAME = 'Samindex'

function LoginScreen({ onSuccess }) {
  const [input, setInput] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [shake, setShake] = useState(false)
  const [avatarError, setAvatarError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.trim() === ENTRY_CODE) {
      sessionStorage.setItem('desktopos_loggedin', 'true')
      onSuccess()
      return
    }

    setAttempts((a) => a + 1)
    setShake(true)
    setInput('')
    setTimeout(() => setShake(false), 400)
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        {avatarError ? (
          <div className="login-avatar login-avatar-fallback">SA</div>
        ) : (
          <img
            src="/avatar.png"
            alt="Samindex"
            className="login-avatar"
            onError={() => setAvatarError(true)}
          />
        )}

        <p className="login-username">{USERNAME}</p>
        <p className="login-tagline">Full-Stack Developer &amp; AI Engineer — Interactive Portfolio</p>

        <p className="login-instruction">
          Enter code: <span className="login-code-display">{ENTRY_CODE}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            className={`login-input ${shake ? 'shake' : ''}`}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            maxLength={2}
          />
          <button type="submit" className="login-button">Enter</button>
        </form>

        {attempts >= 2 && (
          <p className="login-hint">Hint: it's the number right above ↑</p>
        )}

        <p className="login-reassurance">
          Not real security — just part of the experience. Type the code above to begin.
        </p>
      </div>
    </div>
  )
}

export default LoginScreen