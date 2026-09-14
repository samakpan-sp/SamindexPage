import { skillCategories } from '../terminal/terminalContent'
import './ContentWindows.css'

function SkillsWindow() {
  return (
    <div className="content-window">
      <h2 className="content-window-title">Skills</h2>
      {Object.entries(skillCategories).map(([category, items]) => (
        <div className="skills-category" key={category}>
          <h3>{category}</h3>
          <div className="skills-pills">
            {items.map((item) => (
              <span className="skill-pill" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsWindow