import type { Theme } from 'theme-ui'

const theme: Theme = {
  space: [
    0,
    4,
    8,
    16,
    24,
    32,
    40,
    48,
    118
  ],
  fonts: {
    body: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12,
    14,
    18,
    20,
    24,
    28,
    44,
    64,
    96
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: {
      lighter: '#929292',
      light: '#858585',
      base: '#333',
      dark: '#000'
    },
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    border: {
      lighter: 'hsl(0deg, 0%, 89%)',
      light: 'hsl(0deg, 0%, 80%)',
      base: 'hsl(0deg, 0%, 73%)',
    }
  },
  text: {
    default: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 3,
    },
    xs: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 1
    },
    sm: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
    },
    lg: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 5,
    },
    xl: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 6,
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text.dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 6
    },
    h2: {
      color: 'text.dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text.dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'text.dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text.dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text.dark',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text.base',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary',
      cursor: 'pointer',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  },
  layout: {
    container: {
      maxWidth: '644px',
      px: 5
    },
    full: {
      maxWidth: '100%',
    }
  },
  buttons: {
    primary: {
      fontSize: 1,
      fontWeight: 'body',
      backgroundColor: 'background',
      color: 'text.light',
      p: '10px 24px',
      border: '1px solid',
      borderColor: 'border.light',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'muted',
      }
    }
  },
  forms: {
    label: {
      fontSize: 2,
      fontWeight: 'body',
    },
    textarea: {
      border: 'none',
      fontFamily: 'body',
      p: 2,
      background: '#f7f7f7',

      '&:focus': {
        backgroundColor: 'background'
      }
    }
  },
  links: {
    default: {
      color: 'primary',
    }
  }
}
export default theme