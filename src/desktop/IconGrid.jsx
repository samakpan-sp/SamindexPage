import { icons } from './icons'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { useWebGLSupport } from '../hooks/useWebGLSupport'


// Updated
function IconGrid({ onOpenFolder }) {
  const isDesktop = useIsDesktop()
  const webGLSupported = useWebGLSupport()
  const show3D = isDesktop && webGLSupported

  const activate = (icon) => {
    if (icon.externalUrl) {
      window.open(icon.externalUrl, '_blank', 'noopener,noreferrer')
    } else {
      onOpenFolder?.(icon.id)
    }
  }

  const handleKeyDown = (e, icon) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      activate(icon)
    }
  }

  return (
    <div className={`icon-grid ${show3D ? 'icon-grid-offset' : ''}`}>
      {icons.map((icon) => {
        if (show3D && icon.is3D) return null

        return (
          <div
            key={icon.id}
            className={`icon-cell ${icon.flagship ? 'flagship' : ''}`}
            onClick={() => activate(icon)}
            onKeyDown={(e) => handleKeyDown(e, icon)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${icon.label}`}
          >
            <div className="icon-cell-icon">
              <span className="icon-cell-glyph">{icon.icon}</span>
            </div>
            <span className="icon-cell-label">{icon.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default IconGrid

