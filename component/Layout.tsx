/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui'
import Head from 'next/head'

const Layout: React.FC<{ title?: string }> = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title || `Mintroad`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container variant="full">
      {children}
    </Container>
  </div>
)

export default Layout