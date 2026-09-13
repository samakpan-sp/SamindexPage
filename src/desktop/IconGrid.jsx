import { icons } from './icons'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { useWebGLSupport } from '../hooks/useWebGLSupport'

function IconGrid() {
  const isDesktop = useIsDesktop()
  const webGLSupported = useWebGLSupport()
  const show3D = isDesktop && webGLSupported

  return (
    <div className="icon-grid">
      {icons.map((icon) => {
        if (show3D && icon.is3D) return null

        return (
          <div key={icon.id} className={`icon-cell ${icon.flagship ? 'flagship' : ''}`}>
            <div className="icon-cell-icon" />
            <span className="icon-cell-label">{icon.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default IconGrid