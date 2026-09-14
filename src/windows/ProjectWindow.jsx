import './ProjectWindow.css'
import { ExternalLinkIcon, GithubIcon } from './CtaIcons'

function ProjectWindow({ data }) {
  return (
    <div className="project-file">
      {data.stamp && <div className="project-file-stamp">{data.stamp}</div>}

      <h2 className="project-file-title">{data.title}</h2>
      <p className="project-file-subtitle">{data.subtitle}</p>

      {data.ctas && data.ctas.length > 0 && (
        <div className="project-file-ctas">
          {data.ctas.map((cta, i) => (
            
            <a  key={cta.href}
              className={`project-file-cta ${i > 0 ? 'project-file-cta-secondary' : ''}`}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.type === 'repo' ? <GithubIcon /> : <ExternalLinkIcon />}
              <span>{cta.label}</span>
            </a>
          ))}
        </div>
      )}

      {data.sections.map((section) => (
        <div className="project-file-section" key={section.heading}>
          <h3>{section.heading}</h3>
          {section.type === 'paragraph' ? (
            <p>{section.content}</p>
          ) : (
            <ul>
              {section.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="project-file-section">
        <h3>Stack</h3>
        <p className="project-file-stack">{data.stack}</p>
      </div>
    </div>
  )
}

export default ProjectWindow