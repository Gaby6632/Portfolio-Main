// light = top-left color, dark = bottom-right color of the card gradient
export type Skill = { name: string; light: string; dark: string; short: string; long: string };

export const skills: Skill[] = [
  { name: 'HTML', light: '#ff8a5c', dark: '#a8300d', short: 'Structure and semantics of every page.', long: 'Write your detailed HTML description here: semantic markup, accessibility, SEO basics, forms, etc.' },
  { name: 'CSS', light: '#5aa9ff', dark: '#0b3d91', short: 'Layouts, animations and responsive design.', long: 'Write your detailed CSS description here: flexbox, grid, animations, responsive design, etc.' },
  { name: 'JavaScript', light: '#ffe45c', dark: '#a08400', short: 'Interactivity and logic on the front end.', long: 'Write your detailed JavaScript description here.' },
  { name: 'React', light: '#7fe3ff', dark: '#0a6a85', short: 'Component-based user interfaces.', long: 'Write your detailed React description here.' },
  { name: 'Next.js', light: '#9a9a9a', dark: '#111111', short: 'Fast, SEO-friendly full-stack websites.', long: 'Write your detailed Next.js description here.' },
  { name: 'Node.js', light: '#7ddb6a', dark: '#1d6b11', short: 'Server-side JavaScript and APIs.', long: 'Write your detailed Node.js description here.' },
  { name: 'Git & GitHub', light: '#ff9a7a', dark: '#8c2410', short: 'Version control and deployment workflow.', long: 'Write your detailed Git/GitHub description here.' },
  { name: 'Vercel', light: '#b8b8b8', dark: '#1a1a1a', short: 'Hosting and instant deployments.', long: 'Write your detailed Vercel description here.' },
];
