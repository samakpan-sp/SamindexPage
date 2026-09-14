import Window from './Window'
import ProjectWindow from './ProjectWindow'
import Terminal from '../terminal/Terminal'
import AboutWindow from './AboutWindow'
import SkillsWindow from './SkillsWindow'
import ContactWindow from './ContactWindow'
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

  if (openWindowId === 'about') {
    return (
      <Window title="about-me.md" onClose={onClose}>
        <AboutWindow />
      </Window>
    )
  }

  if (openWindowId === 'skills') {
    return (
      <Window title="skills.md" onClose={onClose}>
        <SkillsWindow />
      </Window>
    )
  }

  if (openWindowId === 'contact') {
    return (
      <Window title="contact.md" onClose={onClose}>
        <ContactWindow />
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