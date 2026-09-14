import { useIsDesktop } from '../hooks/useIsDesktop'

function DesktopHint() {
  const isDesktop = useIsDesktop()

  const hintText = isDesktop
    ? '> click a folder icon to boot into a project_'
    : '> tap a folder to open_'

  return <div className="desktop-hint">{hintText}</div>
}

export default DesktopHint