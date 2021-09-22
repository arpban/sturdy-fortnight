/** @jsxImportSource theme-ui */
import type { NextPage } from "next"
import { Container, Heading, Flex, Text } from "theme-ui"
import useSWR from "swr"

import { Product, Layout, Spinner } from "../component"
import { fetcher } from "../utils/fetcher"

const Home: NextPage = () => {
  const { data, error } = useSWR<Product[]>(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product/`,
    fetcher
  )

  if (error) return <Text>An error has occurred.</Text>
  if (!data) return <Spinner />

  return (
    <Layout>
      <Container
        sx={{
          minHeight: "100vh",
          bg: "background",
          py: 8,
        }}
      >
        <Heading
          as="h1"
          variant="xl"
          sx={{
            textAlign: "center",
          }}
        >
          Mintroad
        </Heading>

        <Flex
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mt: 7,
            py: 3,
            borderBottom: "1px solid",
            borderColor: "border.base",
          }}
        >
          <Heading as="h2" variant="lg">
            Products
          </Heading>
        </Flex>

        {data.map(product => (
          <Product key={product._id} {...product} />
        ))}
      </Container>
    </Layout>
  )
}

export default Home
