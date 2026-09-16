import { useState } from 'react'
import TopBar from './TopBar'
import Dock from './Dock'
import IconGrid from './IconGrid'
import FolderCanvas from './FolderCanvas'
import DesktopHint from './DesktopHint'
import ScrollCue from './ScrollCue'
import WindowManager from '../windows/WindowManager'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { useWebGLSupport } from '../hooks/useWebGLSupport'
import './Desktop.css'

function Desktop() {
  const isDesktop = useIsDesktop()
  const webGLSupported = useWebGLSupport()
  const show3D = isDesktop && webGLSupported
  const [openWindowId, setOpenWindowId] = useState(null)

  return (
    <div className="desktop">
      <TopBar />
      <DesktopHint />
      {show3D && (
        <>
          <FolderCanvas onOpenFolder={setOpenWindowId} />
          <ScrollCue />
        </>
      )}
      <IconGrid onOpenFolder={setOpenWindowId} />
      <Dock />
      <WindowManager
        openWindowId={openWindowId}
        onClose={() => setOpenWindowId(null)}
        onNavigate={setOpenWindowId}
      />
    </div>
  )
}

export default Desktop