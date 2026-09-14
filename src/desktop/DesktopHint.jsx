import { useState, useEffect } from 'react'
import { useIsDesktop } from '../hooks/useIsDesktop'

function DesktopHint() {
  const isDesktop = useIsDesktop()
  const [visible, setVisible] = useState(true)

  const hintText = isDesktop
    ? '> click a folder icon to boot into a project_'
    : '> tap a folder to open_'

  useEffect(() => {
    const dismiss = () => setVisible(false)
    window.addEventListener('click', dismiss, { once: true })
    window.addEventListener('touchstart', dismiss, { once: true })
    const timer = setTimeout(dismiss, 6000)

    return () => {
      window.removeEventListener('click', dismiss)
      window.removeEventListener('touchstart', dismiss)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`desktop-hint ${visible ? '' : 'desktop-hint-hidden'}`}>
      {hintText}
    </div>
  )
}

export default DesktopHint