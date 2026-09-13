import TopBar from './TopBar'
import Dock from './Dock'
import IconGrid from './IconGrid'
import FolderCanvas from './FolderCanvas'
import DesktopHint from './DesktopHint'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { useWebGLSupport } from '../hooks/useWebGLSupport'
import './Desktop.css'

function Desktop() {
  const isDesktop = useIsDesktop()
  const webGLSupported = useWebGLSupport()
  const show3D = isDesktop && webGLSupported

  return (
    <div className="desktop">
      <TopBar />
      <DesktopHint />
      {show3D && (
        <FolderCanvas onOpenFolder={(id) => console.log('open folder:', id)} />
      )}
      <IconGrid />
      <Dock />
    </div>
  )
}

export default Desktop