import { contact, cv } from '../terminal/terminalContent'
import { ExternalLinkIcon, GithubIcon } from './CtaIcons'
import './ContentWindows.css'

function ContactWindow() {
  const waDigits = contact.whatsapp.replace(/[^\d]/g, '')

  return (
    <div className="content-window">
      <h2 className="content-window-title">Contact</h2>
      <p className="content-window-subtitle">Have a problem? Let's build the solution.</p>

      <a className="cv-download-button" href={cv.downloadUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLinkIcon />
        <span>Download CV</span>
      </a>
      <a className="cv-view-link" href={cv.viewUrl} target="_blank" rel="noopener noreferrer">
        having trouble? view it here instead
      </a>

      <div className="contact-links">
        <a href={`mailto:${contact.email}`} className="contact-link">
           <span>{contact.email}</span>
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
          <GithubIcon /> <span>GitHub</span>
        </a>
        
        <a  href={`https://wa.me/${waDigits}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span>Chat me on WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

export default ContactWindow