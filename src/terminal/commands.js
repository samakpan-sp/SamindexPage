import { skillCategories, aboutMeText, contact } from './terminalContent'

const projectIds = ['tracy', 'cartplus', 'file-uploader', 'stmuna-homes']

function formatSkillsTree() {
  return Object.entries(skillCategories)
    .map(([category, items]) => `${category}/\n  ${items.join('\n  ')}`)
    .join('\n\n')
}

function formatSkillsFlat() {
  return Object.values(skillCategories).flat().join(', ')
}

function contactHtml() {
  const waDigits = contact.whatsapp.replace(/[^\d]/g, '')
  return `
    <div class="terminal-contact">
      <a href="mailto:${contact.email}" target="_blank" rel="noopener noreferrer"> Email</a>
      <a href="${contact.github}" target="_blank" rel="noopener noreferrer"> GitHub</a>
      <a href="https://wa.me/${waDigits}" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
    </div>
  `
}

const helpText = `Available commands:

  help              show this list
  whoami            about me
  ls skills/        list skill categories
  cat skills.txt    show full skill list
  open <project>    jump to a project (tracy, cartplus, file-uploader, stmuna-homes)
  contact           get in touch
  clear             clear the terminal`

export function runCommand(rawInput, { onOpenProject } = {}) {
  const [cmd, ...args] = rawInput.trim().split(/\s+/)

  switch (cmd) {
    case 'help':
      return { output: helpText }

    case 'whoami':
      return { output: aboutMeText }

    case 'ls':
      if (args[0] === 'skills/' || args[0] === 'skills') {
        return { output: formatSkillsTree() }
      }
      return { output: `ls: cannot access '${args.join(' ')}': No such directory` }

    case 'cat':
      if (args[0] === 'skills.txt') {
        return { output: formatSkillsFlat() }
      }
      return { output: `cat: ${args.join(' ') || '(no file)'}: No such file` }

    case 'contact':
      return { output: contactHtml(), isHtml: true }

    case 'open': {
      const target = args[0]
      if (target && projectIds.includes(target)) {
        onOpenProject?.(target)
        return { output: `Opening ${target}...` }
      }
      return {
        output: `open: unknown project '${target || ''}'. Try: ${projectIds.join(', ')}`,
      }
    }

    case 'clear':
      return { output: '', clear: true }

    case '':
      return { output: '' }

    default:
      return { output: `command not found: ${cmd}. Type 'help' for a list of commands.` }
  }
}