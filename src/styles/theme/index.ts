const breakpoints = {
  mobile: 320,
  tablet: 768,
  notebook: 1024,
  desktop: 1440,
} as const

const theme = {
  color: {
    primary: {
      default: `#ffd698`,
      hover: 'rgba(255, 214, 152, 0.8)',
      active: `#ffd698`,
      focus: `#ffd698`,
      disabled: 'rgba(255, 214, 152, 0.2)',
    },
    secondary: {
      default: `#f1fbec`,
      hover: 'rgba(241, 251, 236, 0.8)',
      active: `#f1fbec`,
      focus: `#f1fbec`,
      disabled: 'rgba(241, 251, 236, 0.2)',
    },
    tertiary: {
      default: `#fede59`,
      hover: 'rgba(254, 222, 89, 0.8)',
      active: `#fede59`,
      focus: `#fede59`,
      disabled: 'rgba(254, 222, 89, 0.2)',
    },
    quaternary: {
      default: `#5a2800`,
      hover: 'rgba(90, 40, 0, 0.8)',
      active: `#5a2800`,
      focus: `#5a2800`,
      disabled: 'rgba(90, 40, 0, 0.2)',
    },
    shadows: {
      primary: {
        default: `#2c2c2c`,
        darken: '#232323',
        lighten: '#565656',
      },
      secondary: {
        default: `#875f3e`,
        darken: '#6c4c31',
        lighten: '#b07d53',
      },
    },
    borders: {
      primary: {
        default: `#3a3738`,
        darken: '#2e2c2c',
        lighten: '#625d5f',
      },
      secondary: {
        default: `#793d03`,
        darken: '#603002',
        lighten: '#c46204',
      },
      tertiary: {
        default: `#55636c`,
        darken: '#444f56',
        lighten: '#71838f',
      },
      quaternary: {
        default: `#faf0d7`,
        darken: '#efd184',
        lighten: '#fbf3df',
      },
      quinary: {
        default: `#4b7874`,
        darken: '#3c605c',
        lighten: '#639e98',
      },
    },
    default: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    background: {
      1: '#051122',
      2: '#debb9d',
      3: '#fff2db',
    },
  },

  // fonts
  text: {
    size: {
      0: '10px', // Super Small
      1: '12px', // Smallest
      2: '14px', // Smaller
      3: '16px', // Mobile   Desktop
      4: '1.25rem', // 18px  20px
      5: '1.5rem', // 22px  24px
      6: '1.875rem', // 27px 30px
      7: '2.5rem', // 36px  40px
      8: '3rem', // 43px  48px
      9: '3.75rem', // 54px 60px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    family: {
      primary: 'Poppins',
      fondamento: `Fondamento`,
      martel: `Martel`,
      roboto: `Roboto`,
    },
  },

  // Transition
  transition: {
    timing: '0.2s',
    property: 'all',
    function: 'ease-in-out',
  },

  // Radius
  radius: {
    small: '4px',
    regular: '8px',
    large: '12px',
    extraLarge: '16px',
    pill: '100px',
    circle: '100%',
  },

  // Index
  zIndex: {
    below: -1,
    default: 0,
    top: 1,
    high: 2,
    highest: 3,
  },

  // Spacings
  spacings: {
    1: '5px',
    2: '10px',
    3: '15px',
    4: '20px',
    5: '25px',
    6: '30px',
    7: '35px',
    8: '40px',
    9: '45px',
    10: '50px',
    11: '55px',
    12: '60px',
    13: '65px',
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
