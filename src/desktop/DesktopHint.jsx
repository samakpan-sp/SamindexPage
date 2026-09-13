import { useState, useEffect } from 'react'

const HINT_TEXT = '> click a folder icon to boot into a project_'

function DesktopHint() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dismiss = () => setVisible(false)

    // Fade out on first click anywhere, or automatically after 6s
    window.addEventListener('click', dismiss, { once: true })
    const timer = setTimeout(dismiss, 6000)

    return () => {
      window.removeEventListener('click', dismiss)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`desktop-hint ${visible ? '' : 'desktop-hint-hidden'}`}>
      {HINT_TEXT}
    </div>
  )
}

export default DesktopHint