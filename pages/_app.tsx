/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/react'

import theme from '../styles/theme'
import globalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
