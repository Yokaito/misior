const breakpoints = {
  mobile: 320,
  tablet: 768,
  notebook: 1024,
  desktop: 1440,
} as const

const theme = {
  // fonts
  text: {
    family: {
      primary: 'Poppins',
    },
  },

  // Breakpoints
  breakpoints,

  // devices query
  devices: {
    mobile: `(min-width: ${breakpoints.mobile}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    notebook: `(min-width: ${breakpoints.notebook}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
  },
} as const

export default theme
