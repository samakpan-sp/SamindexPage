import { icons } from './icons'

function Dock() {
  const dockItems = icons.filter((icon) => icon.flagship || icon.id === 'terminal')

  return (
    <div className="dock">
      {dockItems.map((item) => (
        <div key={item.id} className="dock-item" title={item.label}>
          <div className="dock-item-icon" />
        </div>
      ))}
    </div>
  )
}

export default Dock