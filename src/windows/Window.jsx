import './Window.css'

function Window({ title, onClose, children, accent }) {
  return (
    <div className="window-overlay" onClick={onClose}>
      <div
        className={`window-shell ${accent ? 'window-shell-accent' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="window-titlebar">
          <span className="window-title">{title}</span>
          <button className="window-close" onClick={onClose} aria-label="Close window">
            ✕
          </button>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </div>
  )
}

export default Window