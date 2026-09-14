import { aboutMeText } from '../terminal/terminalContent'
import './ContentWindows.css'

function AboutWindow() {
  return (
    <div className="content-window">
      <h2 className="content-window-title">About Me</h2>
      <pre className="content-window-text">{aboutMeText}</pre>
    </div>
  )
}

export default AboutWindow