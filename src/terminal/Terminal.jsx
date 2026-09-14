import { useState, useRef, useEffect } from 'react'
import { runCommand } from './commands'
import './Terminal.css'

function Terminal({ onOpenProject }) {
  const [lines, setLines] = useState([
    { type: 'output', text: "Welcome. Type 'help' to see available commands." },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(null)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const result = runCommand(trimmed, { onOpenProject })

    if (result.clear) {
      setLines([])
    } else {
      setLines((prev) => [
        ...prev,
        { type: 'command', text: trimmed },
        { type: 'output', text: result.output, isHtml: result.isHtml },
      ])
    }

    setHistory((prev) => [...prev, trimmed])
    setHistoryIndex(null)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setInput(history[nextIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === null) return
      const nextIndex = historyIndex + 1
      if (nextIndex >= history.length) {
        setHistoryIndex(null)
        setInput('')
      } else {
        setHistoryIndex(nextIndex)
        setInput(history[nextIndex])
      }
    }
  }

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i} className={`terminal-line terminal-line-${line.type}`}>
            {line.type === 'command' ? (
              <>
                <span className="terminal-prompt">samindex@portfolio:~$</span> {line.text}
              </>
            ) : line.isHtml ? (
              <div dangerouslySetInnerHTML={{ __html: line.text }} />
            ) : (
              <pre>{line.text}</pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form className="terminal-input-row" onSubmit={handleSubmit}>
        <span className="terminal-prompt">samindex@portfolio:~$</span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </form>
    </div>
  )
}

export default Terminal