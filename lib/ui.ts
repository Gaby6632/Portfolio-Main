const base = 'inline-block cursor-pointer rounded-full border-2 border-accent px-10 py-2.5 font-semibold transition-colors';

export const btnFill = `${base} bg-accent text-white hover:bg-transparent hover:text-accent`;
export const btnOutline = `${base} bg-transparent text-accent hover:bg-accent hover:text-white`;
export const linkBtn = "inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
// variants for the dark "Get Started" section
export const btnFillDark = `${base} bg-accent text-white hover:bg-transparent hover:text-white`;
export const btnOutlineDark = `${base} border-white bg-transparent text-white hover:bg-white hover:text-accent`;

export const h1 = 'mb-4 text-4xl font-bold leading-tight md:text-6xl';
export const h2 = 'mb-4 text-3xl font-bold md:text-4xl';
export const field = 'w-full rounded-[10px] border border-line bg-surface px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent2';

export const paragraph = 'text-base text-muted-foreground max-w-3xl mx-auto md:text-xl';
export const p = 'text-base text-left text-muted-foreground mb-5 max-w-3xl md:text-xl';
export const subTitle = 'text-xl max-w-3xl md:text-2xl'

// export const iconGH = 'text-white bg-gray-800 flex flex-col justify-center p-2 text-3xl rounded-full hover:bg-none '
// export const iconLI = 'text-white bg-accent flex flex-col justify-center p-2 text-3xl rounded-full'

export const iconGH = `
  flex items-center justify-center
  p-2 text-3xl rounded-full
  text-white
  bg-[#18181b]
  border border-white/10
  shadow-md shadow-black/20
  transition-all duration-300 ease-out
  hover:bg-[#242428]
  hover:border-white/25
  hover:scale-110
  hover:shadow-lg hover:shadow-black/30
  active:scale-95
  cursor-pointer
`

export const iconLI = `
  flex items-center justify-center
  p-2 text-3xl rounded-full
  text-white
  bg-[#0A66C2]
  border border-[#0A66C2]/40
  shadow-md shadow-blue-900/20
  transition-all duration-300 ease-out
  hover:bg-[#004182]
  hover:border-blue-300/30
  hover:scale-110
  hover:shadow-lg hover:shadow-blue-900/30
  active:scale-95
  cursor-pointer
`