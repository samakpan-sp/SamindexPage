export const projects = {
  tracy: {
    windowTitle: 'tracy — case_file.md',
    stamp: 'FLAGSHIP PROJECT',
    title: 'TRACY',
    subtitle: 'AI-Assisted Digital Trust Investigation Platform',
    accent: true,
    ctas: [
      { type: 'live', label: 'View Live', href: 'https://tracy-3vhi890.public.builtwithrocket.new' },
      { type: 'repo', label: 'View Repo', href: 'https://github.com/samakpan-sp/TRACY' },
    ],
    sections: [
      {
        heading: 'Case Summary',
        type: 'paragraph',
        content:
          'TRACY takes a phone number, URL, social profile, advert, message, or screenshot and produces a structured, evidence-based report — verified facts, user claims, possible connections, risk indicators, and unknowns — to help everyday users spot scams and impersonation before they lose money.',
      },
      {
        heading: 'Evidence Pipeline',
        type: 'list',
        content: [
          'Real-time message & URL analysis via LLM reasoning',
          'Screenshot OCR (Python + Tesseract microservice)',
          'Video analysis (audio transcript + frame OCR)',
          'Licensed phone-number verification + search footprint check',
          'Cross-investigation identity signal (privacy-safe, no personal data)',
        ],
      },
    ],
    stack: 'React · Node.js/Express · Supabase (Postgres/Auth/Storage) · Python (OCR) · Three.js',
  },

  cartplus: {
    windowTitle: 'cartplus — README.md',
    title: 'CartPlus',
    subtitle: 'React Shopping Cart App',
    accent: false,
    ctas: [
      { type: 'live', label: 'View Live', href: 'https://samakpan-sp.github.io/cartplus/' },
      { type: 'repo', label: 'View Repo', href: 'https://github.com/samakpan-sp/cartplus' },
    ],
    sections: [
      {
        heading: 'Overview',
        type: 'paragraph',
        content:
          'A shopping cart app built with React 19, using Context API and useReducer for global cart state and the FakeStore API for live product data.',
      },
      {
        heading: 'Highlights',
        type: 'list',
        content: [
          'Global cart state via Context API + useReducer',
          'Client-side routing with React Router',
          'Persisted cart contents via localStorage',
          'Live product catalog pulled from the FakeStore API',
        ],
      },
    ],
    stack: 'React 19 · React Router · Context API · FakeStore API',
  },

  'file-uploader': {
    windowTitle: 'file-uploader — README.md',
    title: 'File Uploader',
    subtitle: 'Google Drive-Style File Storage & Sharing',
    accent: false,
    ctas: [
      { type: 'live', label: 'View Live', href: 'https://filein.onrender.com' },
      { type: 'repo', label: 'View Repo', href: 'https://github.com/samakpan-sp/fileIn' },
    ],
    sections: [
      {
        heading: 'Overview',
        type: 'paragraph',
        content:
          'A file storage and management app styled after Google Drive — folder/file cards, drag-and-drop organization, and shareable links with expiry durations, backed by real cloud storage.',
      },
      {
        heading: 'Highlights',
        type: 'list',
        content: [
          'Google Drive-style grid UI with per-card action menu',
          'Drag-and-drop file organization between folders',
          'Inline preview for images/PDFs, download fallback otherwise',
          'Shareable links for both folders and individual files, with expiry',
        ],
      },
    ],
    stack: 'Express · Prisma · PostgreSQL · Passport.js · Multer · Supabase Storage',
  },

  'stmuna-homes': {
    windowTitle: 'stmuna-homes — README.md',
    title: 'Stmuna Homes',
    subtitle: 'Real Estate Investment Platform (Nigeria)',
    accent: false,
    ctas: [
      { type: 'live', label: 'Visit Site', href: 'https://stmunahomes.com' },
    ],
    sections: [
      {
        heading: 'Overview',
        type: 'paragraph',
        content:
          'A business site for a Nigerian real estate investment company, showcasing verified land and property listings across Lagos, Ogun, and Oyo states. Built to give clients a clear, trustworthy way to browse properties, see pricing, and reach the sales team directly.',
      },
      {
        heading: 'Highlights',
        type: 'list',
        content: [
          'Property listings with pricing, location, and availability status',
          'Search and filter by property type and location',
          'Direct contact channels (phone, email, WhatsApp)',
        ],
      },
    ],
    stack: 'WordPress · Elementor',
  },
}