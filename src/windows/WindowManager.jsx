import Window from './Window'
import ProjectWindow from './ProjectWindow'
import Terminal from '../terminal/Terminal'
import { projects } from './projectsData'

function WindowManager({ openWindowId, onClose, onNavigate }) {
  if (!openWindowId) return null

  if (openWindowId === 'terminal') {
    return (
      <Window title="terminal — bash" onClose={onClose}>
        <Terminal onOpenProject={onNavigate} />
      </Window>
    )
  }

  const data = projects[openWindowId]
  if (!data) return null

  return (
    <Window title={data.windowTitle} onClose={onClose} accent={data.accent}>
      <ProjectWindow data={data} />
    </Window>
  )
}

export default WindowManager